const form = document.querySelector('form');
const successMsg = document.getElementById('successMsg');


form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    
    // show success message
    successMsg.style.display = 'block';
    
    // navigate to other page after 2 seconds
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 2000);
  });
  