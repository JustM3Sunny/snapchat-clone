
document.addEventListener("DOMContentLoaded", function() {
    // Simple animation for button on hover
    const btn = document.querySelector('button.btn-primary');
    btn.addEventListener('mouseover', function() {
        btn.style.transform = 'scale(1.1)';
    });

    btn.addEventListener('mouseout', function() {
        btn.style.transform = 'scale(1)';
    });
});
