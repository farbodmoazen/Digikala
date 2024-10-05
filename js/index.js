////////////////// start js
////swipers are in the bottom of file
////////categories in the categories.js
///1variables
///2sticky search
///3search place holder 
const Category=document.getElementById('Category');
const Home=document.getElementById('home');
const openCat = document.getElementById('openCategory');
const menuItems = document.querySelectorAll('.menu-item');
const showInf = document.getElementById('showInformation');
const infList = document.getElementById('informationList');
const angleIcon = document.getElementById('angleIcon');
const marketBtn = document.getElementById('marketBtn');
const notWork = document.querySelector(".notWork");
const needClick = document.querySelector('.need-click');
const showText = document.querySelector('.show-text');
const marketsDiv = document.getElementById('markets');
const DesktopMenu = document.getElementById('desktopMenu');
const emailInput = document.getElementById('emailInput');
const emailBtn = document.getElementById('emailBtn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const closeBtn=document.getElementById('close');
const secondaryText=document.querySelector(".secondary-text");
const primaryText=document.querySelector(".primary-text");
const marketWrapper=document.querySelector(".market-wrapper");
const showable=document.querySelector(".showable");
let isVisible = false; // to toggle the visibility
let mybutton = document.getElementById("myBtn");
let lastScrollY = window.scrollY;
//////desktop menu animation transform on scrolldown and up
window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY) {
        // Scrolling down
        DesktopMenu.style.transform = 'translateY(-100px)';
    } else {
        // Scrolling up
        DesktopMenu.style.transform = 'translateY(-1px)';
    }

    lastScrollY = currentScrollY;
});
///////search place holder above 1024px
if($(window).width() > 1024){
    $('#search-ph').text('جستجو');
}
/////change active class for mobile menu

// Loop through each menu item and add click event listener
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove the 'active' class from all menu items
    menuItems.forEach(menu => menu.classList.remove('active'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active');
  });
});
//////
///////////open categories on hover in desktop size
document.addEventListener('DOMContentLoaded', function () {
    // Show category when hovering over openCat or Category
    openCat.addEventListener('mouseover', function() {
        Category.style.display = 'block';
    });

    Category.addEventListener('mouseover', function() {
        Category.style.display = 'block';
    });
    
    // Hide category when not hovering on either
    openCat.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!Category.matches(':hover') && !openCat.matches(':hover')) {
                Category.style.display = 'none';
            }
        }, 10);  // Delay to prevent immediate hiding
    });

    Category.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!Category.matches(':hover') && !openCat.matches(':hover')) {
                Category.style.display = 'none';
            }
        }, 100);
    });
});
/////change page(category and home)

/////change page(category and home)
document.addEventListener('DOMContentLoaded', function () {
    
    if (notWork) {
        notWork.addEventListener('click', function() {
            document.getElementById('home').style.display = 'none';
            document.getElementById('Category').style.display = 'none';
        });
    } else {
    }
});
/////////
document.getElementById('goCategory').addEventListener('click', function() {
    Home.style.display = 'none';
    Category.style.display = 'block';
});

document.getElementById('goHome').addEventListener('click', function() {
    Category.style.display = 'none';
    Home.style.display = 'block';
});
//to top
// Get the button:



//show informationlist


    showInf.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
        if (infList.style.display === 'none' || infList.style.display === '') {
            infList.style.display = 'block';
            angleIcon.classList.remove('fa-angle-down');
            angleIcon.classList.add('fa-angle-up');
        } else {
            infList.style.display = 'none';
            angleIcon.classList.remove('fa-angle-up');
            angleIcon.classList.add('fa-angle-down');
        }
    }
});
//end show information list
/////
///change btn to able when email pattern is correct
document.getElementById('emailInput').addEventListener('input', function() {
    if (emailPattern.test(emailInput.value)) {
        emailBtn.disabled = false;
        emailBtn.classList.add('able');
    } else {
        emailBtn.disabled = true;
        emailBtn.classList.remove('able');
    }
});
////footer about us
function toggleContent() {
    

    // Check for both 'none' and the default empty value for display
    if (needClick.style.display === "none" || needClick.style.display === "") {
        needClick.style.display = "block";
        showable.classList.remove("text-opacity");
        showText.textContent = "بستن";
    } else {
        needClick.style.display = "none";
        showText.textContent = "مشاهده بیشتر";
        showable.classList.add("text-opacity");
    }
}
//market btn

window.onscroll = function() {
    scrollFunction();
};

if(window.innerWidth > 1024){
    primaryText.innerText="تنوع بالا و پرتخفیف";
    secondaryText.innerText="سوپرمارکت";
}
function scrollFunction() {
    ///for dekstop screen
    if(window.innerWidth > 1024){
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            primaryText.style.transform="translateX(0)";
            secondaryText.style.transform="translateX(0)";
            marketBtn.style.maxWidth = "300px";
        }else{
            primaryText.style.transform="translateX(-200px)";
            secondaryText.style.transform="translateX(-150px)";
            marketBtn.style.maxWidth = "130px";
        }
    }
    ////for mobile screen
    if (window.innerWidth < 1024) {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            marketBtn.style.transform = "translateY(-30px)";
        } else {
            marketBtn.style.transform = "translateY(150px)";
        }
    }
}

// Add an event listener for scroll
window.onscroll = function() {
    scrollFunction();
};
///show markets

marketBtn.addEventListener('click', function() {
    if (!isVisible) {
        marketsDiv.style.transform = "translateY(0)";
        marketWrapper.classList.add("on"); ///overlay background
    } else {
        marketsDiv.style.transform = "translateY(800px)";
        marketWrapper.classList.remove("on"); ///overlay background
    }
    isVisible = !isVisible; // toggle the visibility state
});

// Close the markets div if clicked outside
document.addEventListener('click', function(event) {
    // Check if the clicked element is outside the button and the markets div
    if (!marketBtn.contains(event.target) && !marketsDiv.contains(event.target)) {
        if (isVisible) {
            marketsDiv.style.transform = "translateY(800px)";
            marketWrapper.classList.remove("on"); ///overlay background
            isVisible = false; // Reset visibility state
        }
    }
});
///close markets with btn close
closeBtn.addEventListener('click', function() {
  marketsDiv.style.transform = "translateY(800px)";
  marketWrapper.classList.remove("on"); ///overlay background
  isVisible=false;
});


//////////////////hover desktop menu
document.querySelectorAll('.desktop-item').forEach(item => {
    let isMouseEnteringFromRight = false;

    item.addEventListener('mouseover', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;

        // Determine direction of entry based on mouse position relative to the middle of the item
        isMouseEnteringFromRight = x > rect.width / 2;
        
        // Add corresponding class based on entry direction
        if (isMouseEnteringFromRight) {
            item.classList.add('hover-from-right');
            item.classList.remove('hover-from-left');
        } else {
            item.classList.add('hover-from-left');
            item.classList.remove('hover-from-right');
        }
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover-from-left', 'hover-from-right');
    });
});
//countdown
function startCountdown(duration, countdownId) {
    let timer = duration, hours, minutes, seconds;

    setInterval(() => {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = Math.floor(timer % 60);

        const countdown = document.getElementById(countdownId);
        countdown.querySelector('.hours').textContent = hours < 10 ? '0' + hours : hours;
        countdown.querySelector('.minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        countdown.querySelector('.seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        if (--timer < 0) {
            timer = 0; // Stop countdown at zero
        }
    }, 1000);
}

// Start countdown for 1 hour (3600 seconds) for both countdown timers
const countdownDuration1 = 30000; 
const countdownDuration2 = 30000; // Example: a 30-minute countdown for the second one

startCountdown(countdownDuration1, 'countdown1');
startCountdown(countdownDuration2, 'countdown2');
////
////swipers
const swiper = new Swiper('#story-swiper', {
  // Optional parameters
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  slidesPerView: 4, // Show 4 slides at a time
    spaceBetween: 0, //
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
          1024: {
            slidesPerView: 11.5,
            spaceBetween: 0,
          },
   }
});
// Add event listener for window resize

   const swiper2 = new Swiper('.slider-swiper', {
       loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    autoplay: { // Optional: add autoplay
        delay: 3000,
        disableOnInteraction: false,
    },
    
});
window.addEventListener('resize', swiper2.update());
    const swiper3= new Swiper('.widgets', {
        slidesPerView: 'auto',  // You can also use a fixed number like 1, 2, 3, etc.
        freeMode: false,  // Disable free mode if you don’t want the bounce-back effect
  resistanceRatio: 0,
        // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
    });
const swiper4 = new Swiper('#swiperCategory', {
  // Optional parameters
  slidesPerView: 3.5, // Show 4 slides at a time
    spaceBetween:0, //
  direction: 'horizontal',
   breakpoints: {
          768: {
            slidesPerView: 4.2,
            spaceBetween: 0,
          },
   }

});
const swiper5 = new Swiper('.swiper-brand', {
  // Optional parameters
  slidesPerView: 4, // Show 4 slides at a time
  spaceBetween: 0, // Space between slides
  direction: 'horizontal', // Default is horizontal, but this is fine
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 7.8, // Show 8 slides when the screen width is 1024px or wider
      spaceBetween: 0,  // Adjust space between slides
    },
    // Add smaller breakpoints for responsive behavior if needed
    768: {
      slidesPerView: 5.8, // For tablets, show 6 slides
      spaceBetween: 0,
    }
  },
});
const swiper6 = new Swiper('.swiper-most', {
  // Optional parameters
  slidesPerView: 1.4, // Show 4 slides at a time
    spaceBetween:0, //
  direction: 'horizontal',
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      1024:{
          slidesPerView:4,
          spaceBetween:0
      },
      768: {
      slidesPerView: 3.5, // For tablets, show 6 slides
      spaceBetween: 0,
    },
    560:{
        slidesPerView: 2.5, // For tablets, show 6 slides
      spaceBetween: 0,
    }
  }
});

const swiper7 = new Swiper('.swiper-suggestion', {
    slidesPerView: 'auto',
    spaceBetween: 5,

    // Disable breakpoints
    breakpoints: false,
  direction: 'horizontal',
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
