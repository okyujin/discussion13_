document.addEventListener('DOMContentLoaded', function() {
    // Style the h1 heading
    const heading = document.querySelector('h1');
    heading.classList.add('heading');
  
    // Display current time on double-click
    document.addEventListener('dblclick', function() {
      alert(new Date().toLocaleTimeString());
    });
  
    // toggle the email field based on the checkbox
    const toggleCheckbox = document.getElementById('toggle');
    const emailBox = document.getElementById('emailBox');
  
    // double check 
    toggleCheckbox.addEventListener('change', function() {
      if (this.checked) {
        emailBox.classList.remove('hidden');
      } else {
        emailBox.classList.add('hidden');
      }
    });
  });
  