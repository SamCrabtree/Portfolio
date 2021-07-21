


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


const mySubmit = document.getElementById('submit');

mySubmit.addEventListener('click', function(event) {
    

    event.preventDefault();
   
    const userName = document.getElementById('name').value;
    const patronName = userName;
    const patronEmail = document.getElementById('email').value;
    const patronReason = document.getElementById('reason').value;
    const messageReason = patronReason.toUpperCase();
    const patronComment = document.getElementById('comments').value;
    
 
    document.getElementById("display").innerHTML = `<h2>Thank you ${patronName}!</h2> <h3>A message has been submitted with the following information:</h3> 
    <b>NAME:<b> ${patronName}<br /><br />
    <b>EMAIL:<b> ${patronEmail}<br /><br />
    <b>CONTACT REASON:<b> ${messageReason} <br /> <br />
    <b>MESSAGE:<b> ${patronComment}
    `;
    
})
