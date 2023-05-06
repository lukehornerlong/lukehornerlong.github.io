// Wait for the page to load
window.addEventListener('load', function() {
    console.log("mallard script running");

    // Get the mallard element and its container
    var mallardContainer = document.getElementById('mallard-container');
    var mallard = document.getElementById('mallard');

    // Set the animation duration in seconds
    var animationDuration = 8;

    // Function to check if the mallard container is off-screen
    function isOffScreen(element) {
        var rect = element.getBoundingClientRect();
        return rect.right < 0 || rect.left > window.innerWidth || rect.bottom < 0 || rect.top > window.innerHeight;
    }

    // Function to start a new animation
    function startAnimation() {
        console.log("starting animation");

        // Set a random value for the --random-y variable on the mallard container element
        mallardContainer.style.setProperty('--random-y', Math.random());

        // Set a random value for the --random-x variable on the mallard container element
        mallardContainer.style.setProperty('--random-x', Math.random() * window.innerWidth + 'px');

        // Randomly choose whether to animate the mallard
        if (Math.random() < 0.5) {
            mallard.classList.add('animated');
        } else {
            mallard.classList.remove('animated');
        }
    }

    // Start the first animation
    startAnimation();

    // Set a timer to start a new animation when the current one is finished and the mallard is off-screen
    setInterval(function() {
        console.log("setting interval");
        // Get the mallard container element
        var mallardContainer = document.getElementById('mallard-container');

        // Set a random value for the --random-x variable on the mallard container element
        mallardContainer.style.setProperty('--random-x', Math.floor(Math.random() * (window.innerWidth + 1)));

        // Set a random value for the --random-y variable on the mallard container element
        mallardContainer.style.setProperty('--random-y', Math.random());
        // Check if the mallard is off-screen and the animation has finished
        if (isOffScreen(mallardContainer) && !mallard.classList.contains('animated')) {


            // Start a new animation
            startAnimation();
        }
    }, animationDuration * 1000);
});