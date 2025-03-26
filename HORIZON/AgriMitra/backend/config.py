import firebase_admin
from firebase_admin import credentials, firestore

# Corrected file path using a raw string
cred = credentials.Certificate(r"D:\AgriMitra\backend\serviceAccountKey.json")

firebase_admin.initialize_app(cred)

# Initialize Firestore
db = firestore.client()
