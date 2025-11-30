function Login() 
{
    console.log("Login Button clicked");

    const em = document.getElementById("LoginEmail").value;
    const ps = document.getElementById("LoginPassword").value;

    console.log("Email : " + em);
    console.log("Password : " + ps);

    // if (em === "" || ps === "") {
    //     alert("Please enter both email and password!");
    //     return;
    // }

    alert("Login Done!");

    document.getElementById("LoginEmail").value = "";
    document.getElementById("LoginPassword").value = "";
}


function Registration() 
{
    console.log("Registration Button clicked");

    const na = document.getElementById("FullName").value;
    const em = document.getElementById("RegisterEmail").value;
    const ps = document.getElementById("CreatePassword").value;
    const pa = document.getElementById("ConfirmPassword").value;

    console.log("Full Name : " + na);
    console.log("Email : " + em);
    console.log("Password : " + ps);
    console.log("Confirm Password : " + pa);

    // if (na === "" || em === "" || ps === "" || pa === "") {
    //     alert("All fields are required!");
    //     return;
    // }

    // if (ps !== pa) {
    //     alert("Passwords do not match!");
    //     return;
    // }

    alert("Registration Done!");

    document.getElementById("FullName").value = "";
    document.getElementById("RegisterEmail").value = "";
    document.getElementById("CreatePassword").value = "";
    document.getElementById("ConfirmPassword").value = "";
}
