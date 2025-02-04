function selectOption(option) {
    if (option === 'yes') {
        // Reset "No" button text & "Yes" button font size
        document.getElementById('no-button').innerText = 'Mmmm, Let Me Think About It';
        document.getElementById('yes-button').style.fontSize = '26px'; // Reset font size

        // Start heartbeat effect
        heartbeatEffect(function() {
            document.getElementById('question').style.display = 'none'; // Hide question
            displayCatHeart(); // Show cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?';

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Double size
        yesButton.style.fontSize = newSize + 'px';
    }
}

function heartbeatEffect(callback, time = 1000) {
    if (time <= 120) { 
        // Stop heartbeat effect when it reaches very fast rate
        document.body.style.backgroundColor = '#661515'; // Hold deep red
        setTimeout(callback, 1500); // After 1.5 sec, go to next screen
        return;
    }

    // Apply smooth transition effect
    document.body.style.transition = `background-color ${time * 0.5}ms ease-in-out`;

    // First beat ("lub") - Slowly darken
    document.body.style.backgroundColor = '#661515';
    setTimeout(() => {
        // Second beat ("dub") - Slowly return to normal
        document.body.style.backgroundColor = '#212121';
    }, time * 0.5); // Happens halfway through each cycle

    // Recursive function to create a heartbeat loop, getting faster each time
    setTimeout(() => heartbeatEffect(callback, time * 0.85), time); // Reduce time by 15% per cycle
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; // Clear existing content
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none'; // Hide buttons
    };
}

// Display the cat.gif initially
displayCat();
