
const menu =document.getElementById('menu')

const closeMenu = ()=>{
    menu.classList.add("isNavHiden")
    document.getElementById('closeMenu').removeEventListener('click',closeMenu)
}
const openMenu = ()=>{
     menu.classList.remove("isNavHiden")
     document.getElementById('closeMenu').addEventListener('click',closeMenu);
}
document.getElementById('openMenu').addEventListener('click',openMenu);



const email =document.getElementById('email')
const emailError =document.querySelector('#email + span.error')
const textarea =document.getElementById('message')
const messageError =document.querySelector('#message + span.error')


email.addEventListener('input', (evet)=>{
    if(email.validity.valid){
     emailError.textContent ="",
     emailError.className ="error active";
     email.removeEventListener('input',()=>{})
    }else{
        showEmailError()
    }
})
textarea.addEventListener('input', (evet)=>{
    if(textarea.validity.valid){
     messageError.textContent ="",
     messageError.className ="error active";
     textarea.removeEventListener('input',()=>{})
    }else{
        showMessageError()
    }
})



function showEmailError() {
    if (email.validity.valueMissing) {
      // If the field is empty,
      
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      // If the field doesn't contain an email address,
     
      emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
      // If the data is too short,
     
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
  
    // Set the styling appropriately
    emailError.className = "error active";
  }

function showMessageError() {
    if (textarea.validity.valueMissing) {
      // If the field is empty,
      
      messageError.textContent = "You need to enter mesage.";
    } else if (textarea.validity.tooShort) {
     
      messageError.textContent = "Entered value needs to be greater than 9 character.";
    }
    // Set the styling appropriately
    emailError.className = "error active";
  }

 

