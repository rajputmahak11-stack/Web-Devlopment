// CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("cname").value;
    let email = document.getElementById("cemail").value;
    let msg = document.getElementById("cmsg").value;

    if(name === "" || email === "" || msg === ""){
        alert("Please fill all fields");
        return;
    }

    if(!email.includes("@")){
        alert("Invalid Email");
        return;
    }

    if(msg.length < 10){
        alert("Message should be at least 10 characters");
        return;
    }

    alert("Thank you for contacting us, " + name);
});
