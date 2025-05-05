document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const themeToggle = document.getElementById("theme-toggle");
    const userIcon = document.getElementById("user-icon");
    const body = document.body;

    // פונקציה לניהול הכניסה והיציאה מהמשתמש
    loginBtn.onclick = function () {
        if (loginBtn.innerText === "login") {
            loginBtn.innerText = "out sign";
            userIcon.innerHTML = "👤✅"; // אייקון משתמש מחובר
        } else {
            loginBtn.innerText = "login";
            userIcon.innerHTML = "👤❌"; // אייקון משתמש מנותק
        }
    };

 
        // פונקציה להחלפת מצב יום/לילה
        themeToggle.addEventListener("click", function () {
            if (body.classList.contains("night-mode")) {
                body.classList.remove("night-mode");
                themeToggle.innerText = "night";
            } else {
                body.classList.add("night-mode");
                themeToggle.innerText = "day";
            }
        });
    });
    