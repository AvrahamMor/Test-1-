document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit-btn").onclick = function () {
        // איסוף נתונים מהטופס
        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let birthdate = document.getElementById("birthdate").value;
        let address = document.getElementById("address").value; // שדה חדש - כתובת למשלוח

        // בדיקה שכל השדות מלאים
        if (!fullName || !email || !phone || !birthdate || !address) {
            alert("נא למלא את כל השדות בטופס.");
            return;
        }

        // יצירת פלט להצגה בדף
        let output = `
            <h2>פרטי ההרשמה</h2>
            <p><strong>שם מלא:</strong> ${fullName}</p>
            <p><strong>אימייל:</strong> ${email}</p>
            <p><strong>טלפון:</strong> ${phone}</p>
            <p><strong>תאריך לידה:</strong> ${birthdate}</p>
            <p><strong>כתובת למשלוח:</strong> ${address}</p>
            <p><strong>הרשמתך הושלמה בהצלחה!</strong></p>
            <hr>
        `;

        // הוספת הפלט לדף בצורה דינאמית
        let outputContainer = document.getElementById("output-container");
        outputContainer.innerHTML += output;
        outputContainer.style.display = "block";
    };
});
