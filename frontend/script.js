document.getElementById('url-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('url-input').value;

    try {
        const response = await fetch('https://url-shortner-scpq.onrender.com/url', {  // ✅ Updated URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ URL: url })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('result').innerHTML = `Shortened URL: <a href="https://url-shortner-scpq.onrender.com/${data.id}" target="_blank">https://url-shortner-scpq.onrender.com/${data.id}</a>`; // ✅ Updated URL
    } catch (error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
    }
});