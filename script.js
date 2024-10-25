document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav_link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Tab navigation
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabContentID = button.getAttribute('data-tab');

            // Hide all tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Remove active class from all buttons
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the target tab content and set the clicked button as active
            document.getElementById(tabContentID).classList.add('active');
            button.classList.add('active');
        });
    });

    // Default active tab (if any)
    const defaultActiveButton = document.querySelector('.tab-button.active');
    if (defaultActiveButton) {
        defaultActiveButton.click();
    }

    // Download resume button animation
    const downloadButton = document.getElementById('downloadResume');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            const logoContainer = document.getElementById('logoContainer');
            if (logoContainer) {
                logoContainer.classList.add('animate-logo');
                logoContainer.addEventListener('animationend', function() {
                    logoContainer.classList.remove('animate-logo');
                }, { once: true });
            }
        });
    }
});



let likeCount = 288; // Initialize with the starting like count

function toggleLike(button) {
  const isLiked = button.getAttribute('data-liked') === 'true';
  const likeDisplay = button.querySelector('.likeCount');

  // Toggle the like state
  if (isLiked) {
    likeCount--; // Decrease like count
    button.setAttribute('data-liked', 'false');
  } else {
    likeCount++; // Increase like count
    button.setAttribute('data-liked', 'true');
  }

  // Update the displayed like count
  likeDisplay.textContent = likeCount.toLocaleString();
}
