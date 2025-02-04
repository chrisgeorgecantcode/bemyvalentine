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
        // Stop the heartbeat effect when it reaches very fast rate
        document.body.style.backgroundColor = '#661515'; // Hold full deep red
        setTimeout(callback, 1000); // After 1 sec, go to next screen
        return;
    }

    // Apply sharper transition effect for distinct lub-dub beats
    document.body.style.transition = `background-color ${time * 0.2}ms ease-in`;

    // First beat ("Lub") - Quick flash of light red
    document.body.style.backgroundColor = '#4d0f0f';
    setTimeout(() => {
        // Second beat ("Dub") - Quick flash of deep red
        document.body.style.backgroundColor = '#661515';
        setTimeout(() => {
            // Rest - Reset back to dark gray before the next beat
            document.body.style.transition = `background-color ${time * 0.2}ms ease-out`;
            document.body.style.backgroundColor = '#212121';
        }, time * 0.25); // Dub should last 25% of the cycle
    }, time * 0.15); // Lub should last 15% of the cycle

    // Recursive function to create a heartbeat loop, getting faster each time
    setTimeout(() => heartbeatEffect(callback, time * 0.9), time); // Reduce time by 10% per cycle
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
