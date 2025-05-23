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
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const removedNode of mutation.removedNodes) {
          if (removedNode === btn) {
            btn.removeEventListener('mouseenter', handleMouseEnter);
            btn.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
            return;
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