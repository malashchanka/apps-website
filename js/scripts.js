document.addEventListener("DOMContentLoaded", function() {
    // Prevent default action for active links
    const activeLinks = document.querySelectorAll('a.active');
    activeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Check if the current path includes 'photo-editor' path
    const path = window.location.pathname;
    if (path.includes('/photo-editor/')) {
        // Replace the current state so that it navigates to /apps/ on back button
        history.replaceState({ page: path }, document.title, path);

        // Push the /apps/ state into the history stack
        history.pushState({ page: "/apps/" }, "Our Apps", "/apps/");
    }

    // Handle the back button to navigate to the correct page
    window.addEventListener("popstate", function(event) {
        if (event.state && event.state.page) {
            window.location.href = event.state.page;
        }
    });
});
