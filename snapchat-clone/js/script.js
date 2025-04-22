console.log("Hello Dev !");

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('button.btn-primary');

    if (btn) { // Check if the button exists
        btn.addEventListener('mouseenter', () => {
            btn.classList.add('hovered');
        });

        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('hovered');
        });
    } else {
        console.warn('Button with class "btn-primary" not found.');
    }
});

/* CSS (example - should be in a separate stylesheet) */
/*
.btn-primary {
  transition: transform 0.2s ease-in-out;
}

.btn-primary.hovered {
  transform: scale(1.1);
}
*/