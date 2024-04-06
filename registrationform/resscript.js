 
 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const mismatchMessage = document.getElementById('passwordMismatch');
    const matchMessage= document.getElementById('successMessage');
  
    form.addEventListener('submit', function(event) {

      if (passwordInput.value !== confirmPasswordInput.value) {

        event.preventDefault();
        mismatchMessage.style.display = 'block';
      }
       else {
        matchMessage.style.display = 'block';
      }
    });
  });