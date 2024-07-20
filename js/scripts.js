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

    // Debugging: Listen for history state changes
    (function(history){
        const pushState = history.pushState;
        history.pushState = function(state) {
            const result = pushState.apply(history, arguments);
            window.dispatchEvent(new Event('pushstate'));
            console.log("PushState called:", state);
            return result;
        };
        const replaceState = history.replaceState;
        history.replaceState = function(state) {
            const result = replaceState.apply(history, arguments);
            window.dispatchEvent(new Event('replacestate'));
            console.log("ReplaceState called:", state);
            return result;
        };
    })(window.history);

    // Handle the back button to navigate to the correct page
    window.addEventListener("popstate", function(event) {
        console.log("Popstate event:", event.state);
        if (event.state && event.state.page) {
            window.location.href = event.state.page;
        }
    });

    window.addEventListener('pushstate', function() {
        console.log('Pushstate event triggered');
    });

    window.addEventListener('replacestate', function() {
        console.log('Replacestate event triggered');
    });
});
