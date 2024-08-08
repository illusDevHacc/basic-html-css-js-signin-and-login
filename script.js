document.getElementById("submit").addEventListener("click", function() {
    const password = document.getElementById("passinput").value;
    const email = document.getElementById("emailinput").value;
    window.alert(password)

    fetch("./database.json")
        .then(response => response.json()) 
        .then(data => {
            
            if (data[email]) {
                if (data[email].password === password) {
                    window.alert("Success");
                } else {
                    window.alert("Password is wrong");
                }
            } else {
                window.alert("Email is not found");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
});
