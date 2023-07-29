document.getElementById('pingButton').addEventListener('click', function() {
    fetch('http://10.0.0.166:3000/ping')
        .then(response => response.text())
        .then(data => {
            document.getElementById('serverResponse').textContent += data;
        })
        .catch(error => console.error('Error:', error));
});

