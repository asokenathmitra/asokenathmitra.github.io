window.addEventListener('load', function () {
    // Wait for 500ms before hiding the loading animation
    setTimeout(function () {
        // Hide the loading animation
        document.getElementById('loading').style.display = 'none';

        // Show the main content
        const elements = document.getElementsByClassName('the-page');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
        // document.getElementsByClassName('the-page').style.display = 'none';
        document.querySelector('nav').style.display = 'flex';
    }, 500); // 500ms delay
});

// // script.js
// window.addEventListener('load', function() {
//     // Hide the loading animation
//     document.getElementById('loading').style.display = 'none';

//     // Show the main content
//     document.getElementById('content').style.display = 'block';
// });