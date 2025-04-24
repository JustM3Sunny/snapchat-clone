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
    for (const mutation of mutations) { // Use for...of for better readability and performance
      for (const node of mutation.removedNodes) { // Use for...of for better readability and performance
        if (node === btn) {
          btn.removeEventListener('mouseenter', handleMouseEnter);
          btn.removeEventListener('mouseleave', handleMouseLeave);
          observer.disconnect(); // Stop observing
          return; // Exit the loop early after disconnecting the observer
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Consider observing a more specific parent element if possible
  // For example, if the button is always inside a specific div with id "button-container":
  // const buttonContainer = document.getElementById('button-container');
  // if (buttonContainer) {
  //   observer.observe(buttonContainer, { childList: true });
  // } else {
  //   console.warn("Button container not found, observing document.body instead.");
  // }
});

/* CSS (example - should be in a separate stylesheet)
.btn-primary {
  transition: transform 0.2s ease-in-out; /* Smooth transition */
}

.btn-primary.hovered {
  transform: scale(1.1);
}
*/