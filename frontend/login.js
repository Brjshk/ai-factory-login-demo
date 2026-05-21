document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            username: email,
            password: password
        })
    });
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.access_token);
        window.location.href = 'welcome.html';
    } else {
        document.getElementById('errorMessage').innerText = data.detail;
    }
});