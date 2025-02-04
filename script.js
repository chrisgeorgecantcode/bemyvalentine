function selectOption(option) {
    if (option === 'yes') {
        // Play favorite song
        var song = document.getElementById("favorite-song");
        song.play(); // Start the song
        song.loop = false; // Ensure it does NOT loop

        // Reset "No" button text & "Yes" button font size
        document.getElementById('no-button').innerText = 'Mmmm, Let Me Think About It';
        document.getElementById('yes-button').innerText = 'Of Course!';
        document.getElementById('yes-button').style.fontSize = '26px'; // Reset font size

        // Start heartbeat effect
        heartbeatEffect(function() {
            document.getElementById('question').style.display = 'none'; // Hide question
            displayCatHeart(); // Show cat-heart.gif
        });
    } else if (option === 'no') {
        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('yes-button');

        // Update button text
        noButton.innerText = 'You are funny. And wrong. Try Again!';
        yesButton.innerText = 'Chris George is so much funnier than me';

        // 🚀 Force re-rendering to apply text change
        noButton.style.display = 'none';
        yesButton.style.display = 'none';

        setTimeout(() => {
            noButton.style.display = 'inline-block';
            yesButton.style.display = 'inline-block';
        }, 50);

        // Increase font size of "Yes" button
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Double size
        yesButton.style.fontSize = newSize + 'px';
    }
}


function heartbeatEffect(callback, time = 1000) {
    if (time <= 120) { 
        // Stop the heartbeat effect when it reaches a fast rate
        document.body.style.backgroundColor = '#661515'; // Hold full deep red
        setTimeout(callback, 1000); // After 1 sec, go to next screen
        return;
    }

    // Ensure smooth but sharp transitions
    document.body.style.transition = "background-color 100ms ease-in-out";

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
            }, time * 0.3); // "Dub" lasts 30% of the cycle
        }, time * 0.15); // "Lub-Dub" grouping with short gap
    }, time * 0.15); // "Lub" lasts 15% of the cycle

    // Recursive function to create a heartbeat loop, getting faster each time
    setTimeout(() => heartbeatEffect(callback, time * 0.85), time); // Reduce time by 5% per cycle
}

// Function to display Concert.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear any existing content

    var concertImage = new Image();
    concertImage.src = 'Concert.gif'; // New image
    concertImage.alt = 'Concert';
    concertImage.onload = function() {
        imageContainer.appendChild(concertImage);
    };
}

// Function to display Longdistance.jpg after heartbeat animation
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing content

    var longDistanceImage = new Image();
    longDistanceImage.src = 'Longdistance.jpg'; // New image
    longDistanceImage.alt = 'Long Distance';
    longDistanceImage.onload = function() {
        imageContainer.appendChild(longDistanceImage);
        
        // Display the message after the image
        document.getElementById('message').style.display = 'block';
    };
}

// Display Concert.gif initially
displayCat();
