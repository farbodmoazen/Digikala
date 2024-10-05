
// Initialize the main video swiper
const videoSwiper = new Swiper('#playerContainer', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: window.innerWidth <= 1024, // Enable for <= 1024px, disable for > 1024px
    allowTouchMove: window.innerWidth <= 1024, // Enable for <= 1024px, disable for > 1024px
    on: {
        slideChange: function () {
            stopAllVideos(); // Stop all videos when the slide changes
            setTimeout(() => {
                playCurrentVideo(); // Play the current video
            }, 50); // Adjust the timeout duration as needed
        },
    },
});
// Initialize the footer swiper
const swiperFooter = new Swiper('.swiper-footer', {
    nested: true,
    slidesPerView: 1.4,
    spaceBetween: 0,
});

// Function to stop all videos
function stopAllVideos() {
    const videos = document.querySelectorAll('.customVideo');
    videos.forEach(video => {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset video time to zero
    });
}

// Function to play the current video
function playCurrentVideo() {
    const activeIndex = videoSwiper.activeIndex; // Get the active slide index
    const currentVideo = document.querySelectorAll('.customVideo')[activeIndex]; // Get the current video

    if (currentVideo && currentVideo.paused) {
        currentVideo.play().catch(error => {
            console.error('Error trying to play video:', error);
        });
    }
}

// Handle story slide click to play video
const stories = document.querySelectorAll('.swiper-slide.story');
stories.forEach((story, index) => {
    story.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the document click handler from firing
        e.preventDefault(); // Prevent default link behavior
        
        // Check if the index of the clicked story corresponds to a valid video index
        const correspondingVideoIndex = index; // This should match the structure of your videos
        const totalVideos = document.querySelectorAll('.customVideo').length; // Get total number of videos

        if (correspondingVideoIndex < totalVideos) {
            videoSwiper.slideTo(correspondingVideoIndex); // Slide to the corresponding video
            openVideoPlayer(); // Open the video player
            stopAllVideos(); // Stop all videos
            playCurrentVideo(); // Play the current video
        } else {
            console.warn('No corresponding video for this story slide index:', index);
        }
    });
});

// Function to open the video player
function openVideoPlayer() {
    document.getElementById('playerContainer').style.display = 'block'; // Show video player
}

// Handle close video button
const closeButtons = document.querySelectorAll('.close-video-btn');
closeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the document click handler from firing
        closeVideoPlayer(); // Close the video player
    });
});

// Prevent video player from closing when clicking on next/prev buttons
const nextButton = document.querySelector('#swiper-button-next');
const prevButton = document.querySelector('#swiper-button-prev');

nextButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click from closing the video player
});

prevButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click from closing the video player
});

// Close the video player when clicking outside of video-container in the active swiper slide
document.addEventListener('click', function (event) {
    const activeSlide = document.querySelector('.swiper-slide-active .video-container'); // Get the active slide's video container
    if (activeSlide && !activeSlide.contains(event.target)) {
        closeVideoPlayer(); // Call the function to close the video player
    }
});

// Function to close the video player
function closeVideoPlayer() {
    document.getElementById('playerContainer').style.display = 'none'; // Hide video player
    stopAllVideos(); // Reset all videos
}

// Update progress bar and current time display
const videos = document.querySelectorAll('.customVideo');
videos.forEach(video => {
    const progressBar = video.closest('.video-container').querySelector('.progressBar');
    const currentTimeDisplay = video.closest('.video-container').querySelector('.currentTime');

    video.addEventListener('timeupdate', function () {
        updateProgress(video, progressBar, currentTimeDisplay); // Update progress bar on time update
    });

    // Handle seeking with progress bar
    progressBar.addEventListener('input', function () {
        const seekTime = video.duration * (progressBar.value / 100); // Calculate seek time
        video.currentTime = seekTime; // Set video current time
    });
});

// Function to update progress bar and current time display
function updateProgress(video, progressBar, currentTimeDisplay) {
    const currentTime = video.currentTime;
    const duration = video.duration;

    if (isNaN(duration) || duration === 0) return; // Handle cases where video duration isn't available yet

    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent; // Update progress bar value
    
    // Update time display (MM:SS format)
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
