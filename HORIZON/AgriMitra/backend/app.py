from flask import Flask
from routes.soil import soil_bp

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to AgriMitra Backend!"

# Register Blueprint
app.register_blueprint(soil_bp, url_prefix="/soil")

if __name__ == '__main__':
    app.run(debug=True)
