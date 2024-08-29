function validateForm() {
    var username = document.getElementById("user-name").value;
    var qualification = document.getElementById("qualification").value;

    if (username === "" || qualification === "") {
        alert("Please enter all information");
        return false;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("qualification", qualification);

    window.location.href = 'quiz1.html';
    return false;
}