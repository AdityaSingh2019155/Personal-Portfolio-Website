// Add any JavaScript or jQuery animations you wish to implement

document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scroll effect
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    }
});
