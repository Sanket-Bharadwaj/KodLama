from flask import Flask, render_template, request, jsonify
import pyrebase
import random

# Initialize Flask app with the correct static folder
app = Flask(__name__, static_folder='statics')

# Firebase Configuration
firebase_config = {
    "apiKey": "AIzaSyBE7sjINDYr1wC5Az6DdcmNF2OnotM3jdQ",
    "authDomain": "agrimitra-6c7d3.firebaseapp.com",
    "databaseURL": "https://agrimitra-6c7d3.firebaseio.com",
    "projectId": "agrimitra-6c7d3",
    "storageBucket": "agrimitra-6c7d3.appspot.com",
    "messagingSenderId": "898890361048",
    "appId": "1:898890361048:web:0f0ea67c4c93585bc14fad"
}

firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/add-soil', methods=['POST'])
def add_soil():
    soil_data = {
        "type": random.choice(["Loamy", "Sandy", "Clay"]),
        "texture": random.choice(["Coarse", "Medium", "Fine"]),
        "pHLevel": round(random.uniform(5.5, 7.5), 1),
        "nitrogen": round(random.uniform(10, 20), 2),
        "phosphorus": round(random.uniform(15, 25), 2),
        "potassium": round(random.uniform(25, 35), 2)
    }
    db.child("soil_samples").push(soil_data)
    return jsonify({"message": "Soil data added successfully!", "data": soil_data})

if __name__ == '__main__':
    app.run(debug=True)