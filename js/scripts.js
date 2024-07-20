document.addEventListener("DOMContentLoaded", function() {
    const activeLinks = document.querySelectorAll('a.active');
    activeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Example of setting initial state
    if (!history.state) {
        history.replaceState({ section: 'home' }, 'Home', '/');
    }

    // Example function to navigate to sections
    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView();
            history.pushState({ section: sectionId }, sectionId, `#${sectionId}`);
        }
    }

    // Handle back button
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.section) {
            const section = document.getElementById(event.state.section);
            if (section) {
                section.scrollIntoView();
            }
        }
    });

    // Example of using the navigateToSection function
    document.querySelector('nav ul').addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            const targetSection = event.target.getAttribute('href').replace('/', '').replace('#', '');
            navigateToSection(targetSection);
        }
    });
});
