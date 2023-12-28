var nameError = document.getElementById("name-error")
var emailError = document.getElementById("email-error")
var subjectError = document.getElementById("subject-error")
var messageError = document.getElementById("message-error")
var submitError = document.getElementById("submit-error")

function validateName(){
    var name = document.getElementById('name').value;

    if (name.length==0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML ='<i class="bi bi-check-circle-fill"></i>';
    return true;

    
} 
function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
}   

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;

    }

    emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;


}

function validateSubject(){
    var subject = document.getElementById('subject').value;

    if(subject.length == 0){
        subjectError.innerHTML = "Subject is required";
        return false;
    }

    subjectError.innerHTML =  '<i class="bi bi-check-circle-fill"></i>';
    return true;
}


function validateMessage()
{
    var message = document.getElementById('message').value;

    if(message.length == 0){
        messageError.innerHTML = "Message is required";
        return false;
    }
    messageError.innerHTML =  '<i class="bi bi-check-circle-fill"></i>';
    return true;
}


function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage() )
    {
        submitError.style.display = 'block';
        submitError.innerHTML = "Error found!";
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}