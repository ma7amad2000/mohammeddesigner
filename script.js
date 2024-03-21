document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    // You can replace 'your-email@example.com' with your email address
    window.location.href = "sara.mktaz@gmail.com?subject=Message from " + name + " (" + email + ")&body=" + message;
});
