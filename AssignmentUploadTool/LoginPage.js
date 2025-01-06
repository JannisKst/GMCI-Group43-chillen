function loadLoginPage() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div style="text-align: center; padding: 50px; font-size: 18px;">
            <h1 style="font-size: 36px; margin-bottom: 20px;">Assignment System</h1>
            <form id="loginForm" style="display: inline-block; text-align: left; font-size: 18px; max-width: 400px; width: 100%;">
                <div style="margin-bottom: 20px;">
                    <label for="username" style="display: block; font-size: 20px; margin-bottom: 10px;">Benutzername:</label>
                    <input type="text" id="username" name="username" required style="width: 100%; padding: 10px; font-size: 18px; border-radius: 5px; border: 1px solid #ccc;">
                </div>
                <div style="margin-bottom: 20px;">
                    <label for="password" style="display: block; font-size: 20px; margin-bottom: 10px;">Passwort:</label>
                    <input type="password" id="password" name="password" required style="width: 100%; padding: 10px; font-size: 18px; border-radius: 5px; border: 1px solid #ccc;">
                </div>
                <button type="button" onclick="login()" style="padding: 15px 30px; font-size: 20px; background-color: rgb(79, 153, 223); color: white; border: none; cursor: pointer; border-radius: 5px;">Login</button>
            </form>
        </div>
    `;
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        if (username === "Student" || username === "student") loadCourseSelection();
        else if (username === "Tutor" || username === "tutor") loadTutorAssignmentSelection();
    } else {
        alert("Please enter valid credentials.");
    }
}

document.addEventListener("DOMContentLoaded", loadLoginPage);

