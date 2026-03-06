const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        let valid = true;

        if (name.length < 3) {
            document.getElementById("nameError").innerText = "Name must be at least 3 characters";
            valid = false;
        } else {
            document.getElementById("nameError").innerText = "";
        }

        if (!email.includes("@")) {
            document.getElementById("emailError").innerText = "Enter valid email";
            valid = false;
        } else {
            document.getElementById("emailError").innerText = "";
        }

        if (password.length < 6) {
            document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
            valid = false;
        } else {
            document.getElementById("passwordError").innerText = "";
        }

        if (password !== confirmPassword) {
            document.getElementById("confirmError").innerText = "Passwords do not match";
            valid = false;
        } else {
            document.getElementById("confirmError").innerText = "";
        }

        if (valid) {
            let user = { name, email, password };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Signup Successful!");
            window.location.href = "./login.html";
        }
    });
}


const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        let storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && email === storedUser.email && password === storedUser.password) {
            alert("Login Successful!");
        } else {
            alert("Invalid Email or Password");
        }
    });
}