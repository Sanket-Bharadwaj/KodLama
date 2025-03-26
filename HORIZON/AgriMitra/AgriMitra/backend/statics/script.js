document.getElementById('add-soil-btn').addEventListener('click', () => {
    console.log('Button clicked!'); // Debugging line
    fetch('/add-soil', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = `
            <ul>
                <li><strong>Soil Type:</strong> ${data.data.type}</li>
                <li><strong>Texture:</strong> ${data.data.texture}</li>
                <li><strong>pH Level:</strong> ${data.data.pHLevel}</li>
                <li><strong>Nitrogen (N):</strong> ${data.data.nitrogen} mg/kg</li>
                <li><strong>Phosphorus (P):</strong> ${data.data.phosphorus} mg/kg</li>
                <li><strong>Potassium (K):</strong> ${data.data.potassium} mg/kg</li>
            </ul>`;
    })
    .catch(error => {
        console.error('Error:', error);
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = `<p>Error fetching data.</p>`;
    });
});