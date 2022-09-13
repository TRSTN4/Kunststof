function checkCode()
{
    // Gets the value of the 'codeID' input.
    var nameValue = document.getElementById("codeID").value.toLowerCase();

    // Checks if the value is equal to the required codeword.
    if(nameValue == "doktor beta heeft nog nooit in zijn leven geklommen") {
        // Redirects to the 'success.html' file.
        window.location = "success.html";
    }
    else {
        // Redirects to the 'failed.html' file.
        window.location = "failed.html";
    }
}