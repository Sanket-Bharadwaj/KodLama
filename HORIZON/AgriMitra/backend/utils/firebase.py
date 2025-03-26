from config import db
import datetime

def save_soil_data(data):
    data["timestamp"] = datetime.datetime.now().isoformat()
    db.collection("soil_data").add(data)
