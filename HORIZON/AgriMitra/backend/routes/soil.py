from flask import Blueprint, request, jsonify
import random

soil_bp = Blueprint('soil', __name__)

# Dummy soil data endpoint
@soil_bp.route('/data', methods=['POST'])
def receive_soil_data():
    data = request.json  # Receive data from request
    if not data:
        return jsonify({"error": "No data received"}), 400
    
    # Simulate processing
    data["moisture_level"] = random.randint(10, 100)  # Simulated moisture data
    
    return jsonify({"message": "Data received successfully", "data": data})
