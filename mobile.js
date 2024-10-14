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


let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        addToCart(productId);
    });
});

function addToCart(productId) {
    cart.push(productId);
    alert(`Product ${productId} added to cart!`);
    console.log(cart);
}

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    // Validate 
    if (!name || !email || !age || !course) {
        alert('Please fill out all fields.');
        return;
    }

    if (age < 18 || age > 100) {
        alert('Please enter a valid age between 18 and 100.');
        return;
    }

    const output = `
        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Course:</strong> ${course}</p>
    `;

    document.getElementById('output').innerHTML = output;
    document.getElementById('studentForm').reset();
});


            function sendMessage() {
            // Get the chat input value
            const chatInput = document.getElementById("chatInput");
            const messageText = chatInput.value;

            if (messageText.trim() === "") return; // Prevent empty messages

            // Create a new message element
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = messageText;

            // Add the message to the messages container
            const messagesContainer = document.getElementById("messages");
            messagesContainer.appendChild(messageElement);

            // Scroll to the bottom of the messages container
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // Clear the input field
            chatInput.value = "";
        }

const apps = [
  {
    id: 1,
    name: "App 1",
    description: "This is a great app.",
    downloadLink: "#"
  },
  {
    id: 2,
    name: "App 2",
    description: "This app is awesome.",
    downloadLink: "#"
  },
  {
    id: 3,
    name: "App 3",
    description: "Try this app now!",
    downloadLink: "#"
  }
];

// Function to display the apps
function displayApps(apps) {
  const appList = document.getElementById('app-list');
  appList.innerHTML = ''; // Clear any existing apps

  apps.forEach(app => {
    const appCard = document.createElement('div');
    appCard.className = 'app-card';
    
    appCard.innerHTML = `
      <h3>${app.name}</h3>
      <p>${app.description}</p>
      <button onclick="downloadApp('${app.downloadLink}')">Download</button>
    `;
    
    appList.appendChild(appCard);
  });
}

// Function to simulate downloading an app
function downloadApp(link) {
  alert('Downloading from ' + link);
}

// Search functionality
document.getElementById('search').addEventListener('input', function(e) {
  const searchText = e.target.value.toLowerCase();
  const filteredApps = apps.filter(app => app.name.toLowerCase().includes(searchText));
  displayApps(filteredApps);
});

// Display all
displayApps(apps);

// Answers key
const correctAnswers = {
  q1: 'Paris',
  q2: '8',
  q3: 'Jupiter'
};

// Function to submit the exam and calculate score
function submitExam() {
  const form = document.forms['exam-form'];
  let score = 0;

  // Loop through the answers
  for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
    const userAnswer = form[question].value;
    if (userAnswer === correctAnswer) {
      score++;
    }
  }

  // Display the result
  document.getElementById('score').textContent = score;
  document.getElementById('result').style.display = 'block';
}


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


let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        addToCart(productId);
    });
});

function addToCart(productId) {
    cart.push(productId);
    alert(`Product ${productId} added to cart!`);
    console.log(cart);
}

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    // Validate 
    if (!name || !email || !age || !course) {
        alert('Please fill out all fields.');
        return;
    }

    if (age < 18 || age > 100) {
        alert('Please enter a valid age between 18 and 100.');
        return;
    }

    const output = `
        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Course:</strong> ${course}</p>
    `;

    document.getElementById('output').innerHTML = output;
    document.getElementById('studentForm').reset();
});


            function sendMessage() {
            // Get the chat input value
            const chatInput = document.getElementById("chatInput");
            const messageText = chatInput.value;

            if (messageText.trim() === "") return; // Prevent empty messages

            // Create a new message element
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = messageText;

            // Add the message to the messages container
            const messagesContainer = document.getElementById("messages");
            messagesContainer.appendChild(messageElement);

            // Scroll to the bottom of the messages container
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // Clear the input field
            chatInput.value = "";
        }

const apps = [
  {
    id: 1,
    name: "App 1",
    description: "This is a great app.",
    downloadLink: "#"
  },
  {
    id: 2,
    name: "App 2",
    description: "This app is awesome.",
    downloadLink: "#"
  },
  {
    id: 3,
    name: "App 3",
    description: "Try this app now!",
    downloadLink: "#"
  }
];

// Function to display the apps
function displayApps(apps) {
  const appList = document.getElementById('app-list');
  appList.innerHTML = ''; // Clear any existing apps

  apps.forEach(app => {
    const appCard = document.createElement('div');
    appCard.className = 'app-card';
    
    appCard.innerHTML = `
      <h3>${app.name}</h3>
      <p>${app.description}</p>
      <button onclick="downloadApp('${app.downloadLink}')">Download</button>
    `;
    
    appList.appendChild(appCard);
  });
}

// Function to simulate downloading an app
function downloadApp(link) {
  alert('Downloading from ' + link);
}

// Search functionality
document.getElementById('search').addEventListener('input', function(e) {
  const searchText = e.target.value.toLowerCase();
  const filteredApps = apps.filter(app => app.name.toLowerCase().includes(searchText));
  displayApps(filteredApps);
});

// Display all
displayApps(apps);

// Answers key
const correctAnswers = {
  q1: 'Paris',
  q2: '8',
  q3: 'Jupiter'
};

// Function to submit the exam and calculate score
function submitExam() {
  const form = document.forms['exam-form'];
  let score = 0;

  // Loop through the answers
  for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
    const userAnswer = form[question].value;
    if (userAnswer === correctAnswer) {
      score++;
    }
  }

  // Display the result
  document.getElementById('score').textContent = score;
  document.getElementById('result').style.display = 'block';
}
   
