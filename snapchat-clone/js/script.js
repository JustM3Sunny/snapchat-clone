console.log("Hello Dev!");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('button.btn-primary');

  if (!btn) {
    console.warn("Button with class 'btn-primary' not found.");
    return; // Exit early if the button doesn't exist
  }

  const handleMouseEnter = () => {
    btn.classList.add('hovered');
  };

  const handleMouseLeave = () => {
    btn.classList.remove('hovered');
  };

  btn.addEventListener('mouseenter', handleMouseEnter);
  btn.addEventListener('mouseleave', handleMouseLeave);

  // Optional: Clean up event listeners when the element is removed
  // This prevents memory leaks in Single-Page Applications (SPAs)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.removedNodes) {
        mutation.removedNodes.forEach((node) => {
          if (node === btn) {
            btn.removeEventListener('mouseenter', handleMouseEnter);
            btn.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect(); // Stop observing
          }
        });
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});


/* CSS (example - should be in a separate stylesheet)
.btn-primary {
  transition: transform 0.2s ease-in-out; /* Smooth transition */
}

.btn-primary.hovered {
  transform: scale(1.1);
}
*/