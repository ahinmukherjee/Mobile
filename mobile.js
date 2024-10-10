const img = document.getelem:


function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log(data); // For debugging, remove this in production

    // Display user profile details
    document.getElementById('user-name').innerText = data.name;
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


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Authentication</title>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</head>
<body>
    <h1>Google Sign-In Demo</h1>
    <!-- Placeholder for Google Sign-In button -->
    <div id="g_id_onload"
         data-client_id="YOUR_CLIENT_ID.apps.googleusercontent.com"
         data-callback="handleCredentialResponse"
         data-auto_prompt="false">
    </div>

    <div class="g_id_signin" data-type="standard"></div>

    <!-- Display user profile -->
    <div id="user-profile" style="display: none;">
        <h3>Welcome <span id="user-name"></span>!</h3>
        <img id="user-image" alt="Profile Image">
        <p>Email: <span id="user-email"></span></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
