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
    if (time <= 80) { 
        // Stop the heartbeat effect when it reaches a fast rate
        document.body.style.backgroundColor = '#661515'; // Hold full deep red
        setTimeout(callback, 500); // After 0.5 sec, go to next screen
        return;
    }

    // Ensure smooth but sharp transitions
    document.body.style.transition = "background-color 80ms ease-in-out";

    // First beat ("Lub") - Quick deep red
    document.body.style.backgroundColor = '#661515';
    setTimeout(() => {
        // Short pause between lub and dub
        document.body.style.backgroundColor = '#4d0f0f';
        setTimeout(() => {
            // Second beat ("Dub") - Strong deep red
            document.body.style.backgroundColor = '#661515';
            setTimeout(() => {
                // Return to resting color (#212121) before next cycle
                document.body.style.backgroundColor = '#212121';

                // 🚀 Ensure the next cycle starts exactly when this one ends
                setTimeout(() => heartbeatEffect(callback, time * 0.94), time * 0.6);
            }, time * 0.2); // "Dub" lasts 20% of the cycle
        }, time * 0.15); // "Lub-Dub" grouping with short gap
    }, time * 0.15); // "Lub" lasts 15% of the cycle
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
