


function validateEmail(){
    const form = document.getElementById("contact");
    const email = document.getElementById('email').value;
    const emailPattern = /^[^]+@[^ ]+\.[a-z]{2,3}$/ ;
    const message1 = document.getElementById('valid1');

    if (email.match(emailPattern)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        message1.innerHTML = "Your Email Address is Valid";
        message1.style.color = "green";
    } 

    else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        message1.innerHTML = "Please Enter a Valid Email Address";
        message1.style.color = "red";

    }



  
}


let Name = document.getElementById('name').value;
patronName = toString(patronName);
const patronEmail = document.getElementById('email').value;
const patronReason = document.getElementById('reason').value;
const patronComment = document.getElementById('comments').value;
const mySubmit = document.getElementById('submit');
const patronSubmit = document.getElementById('submission');

mySubmit.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById("complete").innerHTML = `<h2>Thank you ${patronName}! </h2> <h3>The Following Message has been submitted:</h3> 
    <b>NAME:<b> ${patronName}<br />
    <b>EMAIL:<b> ${patronEmail}<br />
    <b>CONTACT REASON:<b> ${patronReason} <br />
    <b>MESSAGE:<b> ${patronComment} <br />
    `;
    
})
