document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can implement your login logic here
    // For demonstration purposes, let's just display an alert
    alert(`Username: ${username}\nPassword: ${password}`);
});
