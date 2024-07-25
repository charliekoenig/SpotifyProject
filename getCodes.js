window.onload = async () => {
        
    /* codes should be stored in node (hidden from client) */
    const clientId = "299bf32bfedd4f7ebf619a2d82f805bd";
    const clientSecret = '8081378d9dba4d33ae233700f1073100';

    /* redirect URI subject to change */
    const redirectUri = "http://localhost:8080/register";

    const authCode = (new URLSearchParams(window.location.search)).get('code');

    try {
        data = await getTokens(clientId, clientSecret, redirectUri, authCode);

        if (data) {
            accessToken = data.access_token;
            refreshToken = data.refresh_token;
        }
    } catch (error) {
        console.error('Error fetching tokens:', error);
    } 
}

async function getTokens(clientId, clientSecret, redirectUri, authCode) {
    response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: new URLSearchParams({
            'grant_type': 'authorization_code',
            'code': authCode,
            'redirect_uri': redirectUri
        })
    });

    data = await response.json();

    console.log(data);
    return data;
}
