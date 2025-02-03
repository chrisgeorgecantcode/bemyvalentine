// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Heartbeat
        heartbeatEffect(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash heartbeat colors and then execute a callback function
function heartbeatEffect(callback) {
    let time = 1000; // Start with 1-second interval
    let maxRed = false; // Track if screen is fully red

    let interval = setInterval(function() {
        // First beat ("lub") - Quick flash
        document.body.style.backgroundColor = '#ff4d4d'; // Light red
        setTimeout(() => {
            document.body.style.backgroundColor = ''; // Reset to normal
        }, time * 0.25); // 25% of the cycle time

        // Second beat ("dub") - Stronger flash
        setTimeout(() => {
            document.body.style.backgroundColor = '#ff0000'; // Stronger red
            setTimeout(() => {
                if (!maxRed) document.body.style.backgroundColor = ''; // Reset again
            }, time * 0.4); // 40% of the cycle time
        }, time * 0.5); // Happens halfway through each cycle

        time *= 0.85; // Speed up by reducing interval time (15% per cycle)

        if (time <= 120) { // When it reaches a very fast rate
            clearInterval(interval); // Stop the heartbeat effect
            document.body.style.backgroundColor = '#ff0000'; // Hold full red
            setTimeout(callback, 1500); // After 1.5 sec, go to the next screen
        }
    }, time); // Each full heartbeat cycle (lub-dub-rest)
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
