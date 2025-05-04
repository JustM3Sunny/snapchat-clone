console.log("Hello Dev!");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('button.btn-primary');

  if (!btn) {
    console.warn("Button with class 'btn-primary' not found.");
    return;
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
    for (const mutation of mutations) { // Use for...of for better readability
      if (mutation.type === 'childList') {
        for (const removedNode of mutation.removedNodes) { // Use for...of for better readability
          if (removedNode === btn) {
            btn.removeEventListener('mouseenter', handleMouseEnter);
            btn.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
            return; // Exit the loop and observer after detaching
          }
        }
      }
    }
  });

  // Observe the parent element of the button, if it exists, otherwise observe the document body.
  const parentElement = btn.parentNode || document.body;
  observer.observe(parentElement, { childList: true });

  // Consider using a more robust method for SPA cleanup, such as a custom event.
  window.addEventListener('beforeunload', () => {
    btn.removeEventListener('mouseenter', handleMouseEnter);
    btn.removeEventListener('mouseleave', handleMouseLeave);
    observer.disconnect();
  });
});

/* CSS (example - should be in a separate stylesheet)
.btn-primary {
  transition: transform 0.2s ease-in-out; /* Smooth transition */
}

.btn-primary.hovered {
  transform: scale(1.1);
}
*/