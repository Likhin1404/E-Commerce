$(document).ready(function(){
  // Scroll to Top
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });

  // Contact Form Validation
  $('#contactForm').submit(function(e){
    e.preventDefault();
    let name = $('#name').val().trim();
    let email = $('#email').val().trim();
    let message = $('#message').val().trim();
    if (name === '' || email === '' || message === '') {
      alert('Please fill all fields.');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for your message! We will get back to you soon.');
      $(this)[0].reset();
    }
  });

  function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});