def recommend_crop(soil_type, ph, moisture, temperature, rainfall):
    """
    Rule-based crop recommendation system
    """
    if ph < 5.5:
        if moisture > 60:
            return "Rice"
        else:
            return "Pineapple"
    elif 5.5 <= ph <= 7.5:
        if soil_type == "sandy":
            return "Groundnut"
        elif soil_type == "loamy":
            return "Wheat"
        elif soil_type == "clay":
            return "Sugarcane"
        else:
            return "Maize"
    else:
        if temperature > 30:
            return "Cotton"
        else:
            return "Barley"
