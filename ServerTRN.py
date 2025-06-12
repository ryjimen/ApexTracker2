
from flask import Flask, jsonify
import requests

app = Flask(__name__)

TRN_API_KEY = "f8813b07-a718-4919-b111-faf047370cbf"  # Use environment variable in production

@app.route('/demo-apex-profile', methods=['GET'])
def get_demo_apex_profile():
    platform = "psn"
    username = "Daltoosh"
    url = f"https://public-api.tracker.gg/v2/apex/standard/profile/{platform}/{username}"

    headers = {
        "TRN-Api-Key": TRN_API_KEY,
        "Accept": "application/json",
        "Accept-Encoding": "gzip"
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return jsonify(response.json())  # Return API data as JSON
    else:
        return jsonify({
            "error": "Request failed",
            "status_code": response.status_code,
            "response": response.text
        }), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
