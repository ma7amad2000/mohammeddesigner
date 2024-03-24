document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // You can replace 'your-email@example.com' with your email address
    window.location.href = "sara.mktaz@gmail.com?subject=Message from " + name + " (" + email + ")&body=" + message;
});


const menu = document.getElementById("menu");
const act = document.getElementById("act");
menu.addEventListener("click", ()=>{
    toggleMenu();

})

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
    const nav = document.querySelector('.navbar nav ul');
    nav.classList.toggle('is-active');
  }


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
