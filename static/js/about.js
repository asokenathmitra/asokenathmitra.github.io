
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
        // document.getElementsByClassName('navbar').style.display = 'flex';
        document.getElementsByClassName('mobile-topnav').style.display = 'flex';
        // document.querySelector('navbar').style.display = 'flex';
    }, 500); // 500ms delay
});