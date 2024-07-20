document.addEventListener("DOMContentLoaded", function() {
    // Prevent default action for active links
    const activeLinks = document.querySelectorAll('a.active');
    activeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Clicked on an active link, preventing default action.");
        });
    });

    // Check if the current path includes 'photo-editor'
    const path = window.location.pathname;
    console.log("Current path:", path);
    if (path.includes('/photo-editor/')) {
        // Replace the current state so that it navigates to /apps/ on back button
        console.log("Path includes '/photo-editor/', replacing state and pushing /apps/");
        history.replaceState({ page: path }, document.title, path);

        // Push the /apps/ state into the history stack
        history.pushState({ page: "/apps/" }, "Our Apps", "/apps/");
    }

    // Handle the back button to navigate to the correct page
    window.addEventListener("popstate", function(event) {
        console.log("Popstate event:", event.state);
        if (event.state && event.state.page) {
            window.location.href = event.state.page;
        }
    });

    // Debugging: Listen for history state changes
    (function(history){
        var pushState = history.pushState;
        history.pushState = function(state) {
            console.log("PushState called:", state);
            return pushState.apply(history, arguments);
        };
        var replaceState = history.replaceState;
        history.replaceState = function(state) {
            console.log("ReplaceState called:", state);
            return replaceState.apply(history, arguments);
        };
    })(window.history);
});
