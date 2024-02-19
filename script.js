document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        // Hide the splash screen gradually
        document.getElementById("splash-screen").style.opacity = 0;

        // Show the content after the splash screen fades out
        setTimeout(function() {
            document.getElementById("content").style.display = "block";
        }, 2000); // Wait for 3 seconds before showing the content

        // After fading out, remove the splash screen from the DOM
        setTimeout(function() {
            document.getElementById("splash-screen").remove();
        }, 3000); // Remove the splash screen after 6 seconds
    }, 1000); // Adjust the timeout as needed (3000ms = 3s)
});
