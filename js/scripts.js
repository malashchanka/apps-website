console.log("Welcome to My GitHub Page");

document.addEventListener("DOMContentLoaded", function() {
    const activeLinks = document.querySelectorAll('a.active');
    activeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
});
