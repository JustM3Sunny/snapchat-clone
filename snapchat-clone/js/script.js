console.log("Hello Dev !");

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('button.btn-primary');

    if (btn) {
        btn.addEventListener('mouseenter', () => {
            btn.classList.add('hovered');
        });

        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('hovered');
        });
    }
});

/* CSS (example - should be in a separate stylesheet)
.btn-primary {
  transition: transform 0.2s ease-in-out; /* Smooth transition */
}

.btn-primary.hovered {
  transform: scale(1.1);
}
*/