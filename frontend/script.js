document.getElementById('url-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('url-input').value;

    try {
        const response = await fetch('http://localhost:8001/url', {
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
        document.getElementById('result').innerHTML = `Shortened URL: <a href="http://localhost:8001/${data.id}" target="_blank">http://localhost:8001/${data.id}</a>`;
    } catch (error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
    }
});
