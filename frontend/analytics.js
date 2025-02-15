document.getElementById('analytics-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const shortId = document.getElementById('short-id-input').value;

    try {
        const response = await fetch(`https://url-shortner-scpq.onrender.com/url/analytics/${shortId}`, {  // ✅ Updated URL
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('analytics-result').innerHTML = `
            <h2>Analytics for Short URL ID: ${shortId}</h2>
            <p>Total Clicks: ${data.totalClicks}</p>
            <h3>Visit History:</h3>
            <ul>
                ${data.analytics.map(visit => `<li>${new Date(visit.timestamp).toLocaleString()}</li>`).join('')}
            </ul>
        `;
    } catch (error) {
        document.getElementById('analytics-result').textContent = 'Error: ' + error.message;
    }
});
