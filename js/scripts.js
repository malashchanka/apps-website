document.addEventListener("DOMContentLoaded", function() {
    // Prevent default action for active links
    const activeLinks = document.querySelectorAll('a.active');
    activeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Clicked on an active link, preventing default action.");
        });
    });
});
