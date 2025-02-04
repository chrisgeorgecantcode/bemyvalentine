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

// Function to execute heartbeat effect and then transition
function heartbeatEffect(callback, time = 1000) {
    if (time <= 120) { 
        // Stop heartbeat effect when it reaches very fast rate
        document.body.style.backgroundColor = '#ff0000'; // Hold full red
        setTimeout(callback, 1500); // After 1.5 sec, go to next screen
        return;
    }

    // First beat ("lub") - Quick flash
    document.body.style.backgroundColor = '#ff4d4d'; // Light red
    setTimeout(() => {
        document.body.style.backgroundColor = ''; // Reset to normal
    }, time * 0.25); // 25% of the cycle time

    // Second beat ("dub") - Stronger flash
    setTimeout(() => {
        document.body.style.backgroundColor = '#ff0000'; // Stronger red
        setTimeout(() => {
            document.body.style.backgroundColor = ''; // Reset again
        }, time * 0.4); // 40% of the cycle time
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
