from flask import Flask, request, jsonify, g
from llm_main import generate_messages
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['EMAIL_CONTENT'] = ""

@app.route("/")
def index():
    return "Hello World!"

@app.route("/setContent", methods=["POST"])
def set_content():
    data = request.get_json()
    if "content" in data:
        app.config['EMAIL_CONTENT'] = data["content"]
        return jsonify({"message": "Email content updated successfully"}), 200
    else:
        return jsonify({"error": "Content not provided in the request"}), 400

@app.route("/generate", methods=["GET"])
def generate():
    email_content = app.config.get('EMAIL_CONTENT', '')
    if email_content:
        response = generate_messages(email_content)
        return jsonify({"message": response})
    else:
        return jsonify({"error": "No data available"}), 404

if __name__ == "__main__":
    app.run(debug=True)
