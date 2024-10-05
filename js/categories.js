const booksTab = document.getElementById('books');
const mobilesTab = document.getElementById('mobiles');
const secHeader = document.getElementById('secHeader');
const productTitle = document.getElementById('productTitle');
const bookListItems = document.querySelectorAll('#bookList li');
const audioBookItem = document.querySelector('#lastProduct');
const bookP = document.getElementById('bookProduct');
const bookLi = document.getElementById('bookList');
const bookAng = document.getElementById('bookAngle');

// Function to switch to mobiles
const switchToMobiles = () => {
    booksTab.classList.remove('choosen');
    mobilesTab.classList.add('choosen');
    secHeader.textContent = 'موبایل';
    productTitle.textContent = 'موبایل و تبلت';

    bookListItems.forEach(item => {
        const spanText = item.querySelector('span');
        const img = item.querySelector('img');

        if (spanText.textContent === 'کتاب چاپی') {
            spanText.textContent = 'آیفون';
            img.src = './images/mobile.png';
        }
    });

    if (audioBookItem.textContent === 'کتاب صوتی') {
        audioBookItem.textContent = 'سامسونگ';
    }
};

// Function to switch to books
const switchToBooks = () => {
    mobilesTab.classList.remove('choosen');
    booksTab.classList.add('choosen');
    secHeader.textContent = 'کتاب و لوازم تحریر';
    productTitle.textContent = 'کتاب و مجله';

    bookListItems.forEach(item => {
        const spanText = item.querySelector('span');
        const img = item.querySelector('img');

        if (spanText.textContent === 'آیفون') {
            spanText.textContent = 'کتاب چاپی';
            img.src = './images/book.jpg';
        }
    });

    if (audioBookItem.textContent === 'سامسونگ') {
        audioBookItem.textContent = 'کتاب صوتی';
    }
};

// Handle book list toggle
bookP.addEventListener('click', () => {
    if (bookLi.style.display === 'none' || bookLi.style.display === '') {
        bookLi.style.display = 'flex';
        bookAng.classList.remove('fa-angle-down');
        bookAng.classList.add('fa-angle-up');
    } else {
        bookLi.style.display = 'none';
        bookAng.classList.remove('fa-angle-up');
        bookAng.classList.add('fa-angle-down');
    }
});

// Function to set event listeners based on screen width
const setEventListeners = () => {
    if (window.innerWidth > 1024) {
        // Remove any existing click event listeners
        mobilesTab.removeEventListener('click', switchToMobiles);
        booksTab.removeEventListener('click', switchToBooks);

        // Add hover event listeners for larger screens
        mobilesTab.addEventListener('mouseenter', switchToMobiles);
        booksTab.addEventListener('mouseenter', switchToBooks);
        bookLi.style.display="flex";
    } else {
        // Remove any existing hover event listeners
        mobilesTab.removeEventListener('mouseenter', switchToMobiles);
        booksTab.removeEventListener('mouseenter', switchToBooks);

        // Add click event listeners for smaller screens
        mobilesTab.addEventListener('click', switchToMobiles);
        booksTab.addEventListener('click', switchToBooks);
    }
};

// Call the function on page load
setEventListeners();

// Reapply event listeners when the window is resized
window.addEventListener('resize', setEventListeners);