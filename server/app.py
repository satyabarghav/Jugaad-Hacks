from flask import Flask, request, jsonify
from llm_main import generate_messages
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Hello World!"

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    if "content" in data:
        email_content = data["content"]
        response = generate_messages(email_content)
        return jsonify({"message": response}), 200
    else:
        return jsonify({"error": "Content not provided in the request"}), 400

if __name__ == "__main__":
    app.run(debug=True)
