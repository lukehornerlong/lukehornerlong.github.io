// Wait for the page to load
window.addEventListener('load', function() {
    console.log("mallard script running");
    // Get the mallard element
    var mallard = document.getElementById('mallard');

    // Add the "animated" class to the mallard element every 5 to 10 seconds
    setInterval(function() {
        console.log("settinginterval");

        // Get the mallard container element
        var mallardContainer = document.getElementById('mallard-container');

// Set a random value for the --random-y variable on the mallard container element


        setTimeout(function () {
            mallardContainer.style.setProperty('--random-y', Math.random());
            mallardContainer.style.setProperty('--random-x', Math.random() * window.innerWidth + 'px');
            // Randomly choose whether to animate the mallard
            if (Math.random() < 0.5) {
                mallard.classList.add('animated');
            } else {
                mallard.classList.remove('animated');
            }
        }, 6000); // 8 seconds to match the animation duration

    }, Math.random() * 5000 + 5000);
});