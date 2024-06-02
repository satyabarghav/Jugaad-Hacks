from flask import Flask, request, jsonify
from llm_main import generate_messages
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

email_content = ""


@app.route("/setContent", methods=["POST"])
def set_content():
    global email_content
    global response

    data = request.get_json()
    if "content" in data:
        email_content = data["content"]
        return jsonify({"message": "Email content updated successfully"}), 200
    else:
        return jsonify({"error": "Content not provided in the request"}), 400

@app.route("/generate", methods=["GET"])
def generate():
    response = generate_messages(email_content)
    if response:
        return jsonify({"message": response})
    else:
        return jsonify({"error": "No data available"}), 404

if __name__ == "__main__":
    app.run(debug=True)
