function checkLogin()
{
    // Gets the value of the 'usernameID' input.
    var nameValue = document.getElementById("usernameID").value.toLowerCase();

    // Checks if the value is equal to the required username.
    if(nameValue == "doktor beta") {
        // Redirects to the 'code.html' file.
        window.location = "code.html";
    }
    else {
        // Redirects to the 'login.html' file.
        window.location = "login.html";
    }
}