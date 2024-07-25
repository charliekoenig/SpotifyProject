window.onload = () => {
    document.getElementById('signUpButton').onclick = () => beginAuthorization();
}

function beginAuthorization() {
    /* This should be in node (hidden from client), not js */
    const clientId = "299bf32bfedd4f7ebf619a2d82f805bd";

    /* Redirect URI subject to change */
    const redirectUri = "http://localhost:8080/register";

    const scopes = 'user-modify-playback-state user-read-playback-state user-read-currently-playing user-read-recently-played';
    
    const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = url;
}
