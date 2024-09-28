 // Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor) {  // Null check
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {  // Null check for target
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Toggle dark mode
const toggleDarkMode = document.getElementById('dark-mode-toggle');

if (toggleDarkMode) {  // Null check
    toggleDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
}

// Check for saved user preference
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Display current date
const dateElements = document.querySelectorAll('.date');

if (dateElements.length > 0) {  // Null check
    dateElements.forEach(element => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        element.textContent = new Date().toLocaleDateString('en-US', options);
    });
}

// Load more posts functionality
let postCount = 2; // Number of posts to show initially
const posts = document.querySelectorAll('.post');

if (posts.length > 0) {  // Null check
    function loadMorePosts() {
        for (let i = 0; i < postCount; i++) {
            if (posts[i]) {
                posts[i].style.display = 'block'; // Show the post
            }
        }

        if (postCount >= posts.length) {
            const loadMoreButton = document.getElementById('load-more');
            if (loadMoreButton) {  // Null check for load more button
                loadMoreButton.style.display = 'none'; // Hide button if no more posts
            }
        }
    }

    // Event listener for load more button
    const loadMoreButton = document.getElementById('load-more');
    if (loadMoreButton) {  // Null check
        loadMoreButton.addEventListener('click', () => {
            postCount += 2; // Increase count
            loadMorePosts();
        });
    }

    // Initial load
    loadMorePosts();
}
