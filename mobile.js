const img = document.getElementById('user-name').innerText = ``;


function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log(data); // For debugging, remove this in production

    // Display user profile details
    document.getElementById('user-name').innerText = data. name;
    document.getElementById('user-email').innerText = data.email;
    document.getElementById('user-image').src = data.picture;
    document.getElementById('user-profile').style.display = 'block';
}

(function () {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.
      1/js.cookie.min.js";
    script.onload = () => console.log("Cookies library loaded.");
    document.head.appendChild(script);
})();


<
  function handleCredentialResponse(response) {
    // Decode and handle the ID token
    const token = response.credential;
    console.log("ID Token: " + token);
  }

  window.onload = function() {
    google.accounts.id.initialize({
      client_id: 'YOUR_CLIENT_ID',
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("g_id_signin"),
      { theme: "outline", size: "large" }  // customization
    );

    google.accounts.id.prompt(); // to display the One Tap sign-in prompt
  };

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  console.log(payload);
}
