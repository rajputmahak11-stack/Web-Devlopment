function Login()
{
console.log("login Button clicked")

const em=document.getElementById("LoginEmail").value;
const ps=document.getElementById("LoginPassword").value;
console.log("email : "+em);
console.log("password : "+ps);


alert("login done");
document.getElementById("LoginEmail").value ="";
document.getElementById("LoginPassword").value ="";


}
function registeration()
{
console.log("Registeration Button clicked");
const na=document.getElementById("FullName").value;

const em=document.getElementById("LoginEmail").value;

const ps=document.getElementById("CreatePassword").value;
const pa=document.getElementById("ConfirmPassword").value;

console.log("FullName : "+na);
console.log("Email: "+em);
console.log("Password : "+ps);
console.log("ConfirmPassword: "+pa);

alert("registeration done");

document.getElementById("FullName").value ="";
document.getElementById("LoginEmail").value ="";
document.getElementById("CreatePassword").value ="";
document.getElementById("ConfirmPassword").value ="";



}
    