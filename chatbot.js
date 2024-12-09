// Initialize Lucide Icons
lucide.createIcons();

// Burger Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const sidebar = document.querySelector('.sidebar');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    sidebar.classList.toggle('mobile-open');
});

// User Account Popup
const userProfile = document.querySelector('.user-profile');
const userAccountPopup = document.getElementById('userAccountPopup');
const closePopupBtn = userAccountPopup.querySelector('.close-popup');

// Open popup when clicking user profile
userProfile.addEventListener('click', () => {
    userAccountPopup.classList.add('active');
});

// Close popup when clicking close button
closePopupBtn.addEventListener('click', () => {
    userAccountPopup.classList.remove('active');
});

// Close popup when clicking outside of popup content
userAccountPopup.addEventListener('click', (e) => {
    if (e.target === userAccountPopup) {
        userAccountPopup.classList.remove('active');
    }
});

// Responsive sidebar handling
function handleResponsiveSidebar() {
    if (window.innerWidth <= 1200) {
        burgerMenu.style.display = 'flex';
        
        // Close sidebar when a chat item is clicked
        const chatItems = document.querySelectorAll('.chat-item');
        chatItems.forEach(item => {
            item.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                sidebar.classList.remove('mobile-open');
            });
        });
    } else {
        burgerMenu.style.display = 'none';
        sidebar.classList.remove('mobile-open');
    }
}

// Initial responsive check
handleResponsiveSidebar();

// Recheck on window resize
window.addEventListener('resize', handleResponsiveSidebar);