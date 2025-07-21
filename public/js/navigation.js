/**
 * Navigation functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    // Active case indicator has been removed as it's no longer relevant
    // checkActiveCase();
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            // Check if click is outside the mobile menu and the toggle button
            if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    // Handle dropdown on touch devices
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const parent = this.closest('.nav-dropdown');
            const content = parent.querySelector('.dropdown-content');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                if (dropdown !== content) {
                    dropdown.style.display = 'none';
                }
            });
            
            // Toggle this dropdown
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
    
    // Function to check for active case and display indicator - removed as no longer relevant
    function checkActiveCase() {
        // Functionality removed as active case indicator is no longer needed
        // This empty function is kept to maintain code structure in case other parts of the app reference it
    }
});
