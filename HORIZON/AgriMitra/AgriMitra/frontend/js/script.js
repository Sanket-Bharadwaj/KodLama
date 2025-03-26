document.getElementById('add-soil-btn').addEventListener('click', () => {
    const loadingAnimation = document.getElementById('loading-animation');
    const resultsContainer = document.getElementById('results-container');
    const cropSuggestion = document.getElementById('crop-suggestion');
    const soilImprovement = document.getElementById('soil-improvement');

    // Show loading animation
    loadingAnimation.style.display = 'inline-block';
    resultsContainer.innerHTML = '';
    cropSuggestion.innerHTML = '';
    soilImprovement.innerHTML = '';

    setTimeout(() => {
        loadingAnimation.style.display = 'none';

        const soilData = {
            type: "Loamy",
            texture: "Medium",
            pHLevel: (getRandomFloat(6.0, 6.8) + (Math.random() - 0.5) * 0.2).toFixed(1),
            nitrogen: (getRandomFloat(15, 18) + (Math.random() - 0.5) * 0.2).toFixed(2),
            phosphorus: (getRandomFloat(20, 23) + (Math.random() - 0.5) * 0.2).toFixed(2),
            potassium: (getRandomFloat(30, 33) + (Math.random() - 0.5) * 0.2).toFixed(2)
        };

        resultsContainer.innerHTML = `
            <ul>
                <li><strong>Soil Type:</strong> ${soilData.type}</li>
                <li><strong>Texture:</strong> ${soilData.texture}</li>
                <li><strong>pH Level:</strong> ${soilData.pHLevel}</li>
                <li><strong>Nitrogen (N):</strong> ${soilData.nitrogen} mg/kg</li>
                <li><strong>Phosphorus (P):</strong> ${soilData.phosphorus} mg/kg</li>
                <li><strong>Potassium (K):</strong> ${soilData.potassium} mg/kg</li>
            </ul>`;

        const suggestedCrop = "Wheat";
        cropSuggestion.innerHTML = `<p><strong>Suggested Crop:</strong> ${suggestedCrop}</p>`;

        const improvementMeasures = "Add organic matter to improve drainage and nutrient retention.";
        soilImprovement.innerHTML = `<p><strong>Soil Improvement Measures:</strong> ${improvementMeasures}</p>`;

    }, 2000);
});

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
