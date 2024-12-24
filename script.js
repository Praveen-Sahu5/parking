document.addEventListener('DOMContentLoaded', function () {
    // Function to generate a random star rating (between 4 and 5 stars)
    function generateRandomStars() {
        return (Math.random() * (5 - 4) + 4).toFixed(1);
    }

    // Function to generate a random review
    function generateRandomReview() {
        const stars = generateRandomStars();
        const review = {
            stars: stars,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };
        return review;
    }

    // Function to create a review box
    function createReviewBox(review) {
        const reviewBox = document.createElement('div');
        reviewBox.classList.add('review-box');
        reviewBox.innerHTML = `
            <div class="stars">
                ${Array.from({ length: Math.floor(review.stars) }, (_, index) =>
                    '<img src="images/review_star.png" alt="Filled Star" style="width: 15px">'
                ).join('')}
            </div>
            <div class="text">${review.text}</div>
        `;
        return reviewBox;
    }

    // Function to display reviews with animation
    function displayReviews() {
        const reviewsSection = document.getElementById('reviews');
        const numReviews = 5; // Number of reviews to display
        for (let i = 0; i < numReviews; i++) {
            const review = generateRandomReview();
            const reviewBox = createReviewBox(review);
            reviewsSection.appendChild(reviewBox);
        }
        animateReviews();
    }

    // Function to animate reviews
    function animateReviews() {
        const reviewBoxes = document.querySelectorAll('.review-box');
        reviewBoxes.forEach((reviewBox, index) => {
            reviewBox.style.transitionDelay = `${index * 0.2}s`; // Delay animation (adjust here)
            reviewBox.classList.add('show-review'); // Add class for animation
        });
    }

    // Call displayReviews to show reviews with animation
    displayReviews();

    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
