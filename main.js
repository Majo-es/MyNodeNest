// Combined JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Maria Jose NodeNest loaded successfully!');
  
  // Button click tracking
  const buttons = document.querySelectorAll('.btn-hover');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const buttonText = this.querySelector('span').textContent;
      console.log(`Button clicked: ${buttonText}`);
    });
  });

  // Dark mode toggle functionality
  // Create dark mode toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'dark-mode-toggle';
  toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  
  // Add button to page
  document.body.appendChild(toggleButton);

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme and set the initial aria-label
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    toggleButton.setAttribute('aria-label', 'Toggle light mode');
  } else {
    // Update theme color for light mode on initial load
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f0dae4');
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
  }

  // Toggle dark mode function
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    
    // Update button icon and aria-label
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
      toggleButton.setAttribute('aria-label', 'Toggle light mode');
      localStorage.setItem('theme', 'dark');
      themeColorMeta.setAttribute('content', '#cfbbff');
    } else {
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
      toggleButton.setAttribute('aria-label', 'Toggle dark mode');
      localStorage.setItem('theme', 'light');
      themeColorMeta.setAttribute('content', '#f0dae4');
    }
  }

  // Add click event listener
  toggleButton.addEventListener('click', toggleDarkMode);
  
  // Add keyboard support (Enter key)
  toggleButton.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      toggleDarkMode();
    }
  });
});
