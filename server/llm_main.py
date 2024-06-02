import requests
import json
from groq import Groq

API_URL = "https://api-inference.huggingface.co/models/ealvaradob/bert-finetuned-phishing"
headers = {"Authorization": "Bearer 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"}
# email_content = "Dear colleague, An important update about your email has exceeded your storage limit. You will not be able to send or receive all of your messages. We will close all older versions of our Mailbox as of Friday, June 12, 2023. To activate and complete the required information click here (https://ec-ec.squarespace.com). Account must be reactivated today to regenerate new space. Management Team"


def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()


def generate_messages(email_content):
    classification_data = query({
        "inputs": email_content,
    })

    print(classification_data)

    first_element = classification_data[0]

    # Access the first dictionary (containing prediction) from the inner list
    prediction_data = first_element[0]

    # Extract predicted class and score
    predicted_class = prediction_data["label"]
    confidence_score = prediction_data["score"]

    # Groq API configuration
    GROQ_API_KEY = "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"  # Replace with your API key

    prompt = f"""
    **Email:** {email_content}

    **Phishing Classification:** **{predicted_class}** (Retrieved from BERT model)

    **Confidence Score:** **{confidence_score:.4f}** (Retrieved from BERT model)
    """

    client = Groq(api_key=GROQ_API_KEY)

    chat_completion = client.chat.completions.create(
        messages=[

            {
                "role": "system",
                "content": """
                            # As a phishing email checking assistant

                            Your role is to analyze email content, determine if it's phishing, and provide explanations and preventive tips to the user.

                            **Instructions:**
                            - Analyze the provided email content to assess if it's classified as phishing or legitimate.
                            - Clearly explain your classification decision to the user, highlighting key indicators and reasons for your assessment.
                            - Offer practical tips and best practices for preventing phishing attempts, empowering users with actionable advice to safeguard their online security.
                            - Engage with the user in a conversational manner, inviting questions and feedback to facilitate understanding and learning.
                            - Remember to maintain focus on phishing-related responses and refrain from providing irrelevant or off-topic information.

                            **Example:**
                            User: "A vulnerability has been identified in the Apple Facetime mobile applications that allow an attacker to
                            record calls and videos from your mobile device without your knowledge.
                            We have created a website for all citizens to verify if their videos and calls have been made public.
                            TO perform the verification, please use the following link:"
                            Model: "# Phishing Alert!

                            After analyzing the provided email content, I strongly classify this email as a phishing attempt with a high confidence score of **0.9938**. Here's why:
                            
                            - The email creates a sense of urgency by claiming a vulnerability in Apple's Facetime app, which might make you anxious to take action.
                            - The email asks you to visit a suspicious website to verify if your calls and videos have been made public, which is an unusual and unnecessary measure.
                            - The link provided is likely a phishing trap, designed to steal your personal information or install malware on your device.
                            
                            ## Warning Signs:
                            
                            1. **Urgent tone:** Phishers often create a sense of urgency to prompt you into taking action quickly, without thinking twice.
                            2. **Suspicious link:** Avoid clicking on unfamiliar links, especially those asking for sensitive information or login credentials.
                            3. **Vagueness:** Legitimate companies usually provide clear and concise information about security issues. Be cautious of ambiguous language.
                            
                            ## Protect Yourself:
                            
                            1. **Verify official sources:** Always check the authenticity of the email and the URL by contacting the company directly or visiting their official website.
                            2. **Be wary of urgent requests:** Legitimate companies rarely ask for sensitive information or perform security checks via email.
                            3. **Keep software up-to-date:** Ensure your operating system, browser, and apps are updated with the latest security patches.
                            
                            Stay safe online, and don't hesitate to ask if you have any questions or concerns!"

                            Your role is vital in helping users identify and mitigate phishing risks effectively. Thank you for your valuable assistance!
                         """
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        model="llama3-8b-8192",
        temperature=0.7,
        max_tokens=1024,
        top_p=1,
        stop=None,
        stream=False,
    )
    message_content = chat_completion.choices[0].message.content

    # Extract the confidence score from the BERT model prediction
    confidence_score = prediction_data["score"]  # Assuming `prediction_data` contains BERT model prediction

    # Construct the JSON response object
    response_json = {
        "message": message_content,
        "confidence_score": confidence_score
    }

    print(response_json)
    return(response_json)