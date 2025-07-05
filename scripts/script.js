document.addEventListener('DOMContentLoaded', function () {
    // Navigation handler for buttons and links
    document.querySelectorAll('[data-nav]').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const targetPage = button.getAttribute('data-nav');
            navigateToPage(targetPage);
        });
    });

    // Field cards click handler
    document.querySelectorAll('.field-card').forEach(card => {
        card.addEventListener('click', () => {
            const fieldId = card.getAttribute('data-field');
            window.location.href = `/field/${fieldId}`;
        });
    });

    function navigateToPage(page) {
        window.location.href = `/${page}`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollUpBtn");

    // Show button only when scrolling down
    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 270 ? "block" : "none";
    });

    // Scroll to the top when clicked
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
