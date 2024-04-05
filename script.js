document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('portfolioForm');
    const nameField = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    const phoneField = document.getElementById('phoneField');
    const phonePattern = /^\d{10}$/;
    const phoneError = document.getElementById('phoneError');
    const phoneRadio = document.getElementById('phone-contact');
    const emailRadio = document.getElementById('email-contact');
    const success = document.getElementById('success');
const darkMode = document.getElementById('darkMode');
const header = document.querySelector('header');
const dalMode = document.getElementById('dalMode');
const lightMode = document.getElementById('lightMode');
    darkMode.addEventListener("click",() =>{
        if(darkMode.checked){
        dalMode.checked = false;
        lightMode.checked = false;
       document.body.classList.toggle("dark-mode");
       header.classList.toggle("dark-mode");
       
        }else{
            document.body.classList.remove("dark-mode");
            header.classList.remove("dark-mode");
            document.body.classList.remove("dal-mode");
            header.classList.remove("dal-mode");
        }
      });
      
      dalMode.addEventListener("click", () =>{
        if(dalMode.checked){
        darkMode.checked = false;
        lightMode.checked = false;
        document.body.classList.toggle("dal-mode");
        header.classList.toggle("dal-mode");
        }else{
            document.body.classList.remove("dal-mode");
            header.classList.remove("dal-mode");
            document.body.classList.remove("dark-mode");
            header.classList.remove("dark-mode");
        }
      });
     lightMode.addEventListener("click", () => {
        if(lightMode.checked){
            dalMode.checked = false;
            darkMode.checked = false;
        document.body.classList.remove("dal-mode");
        header.classList.remove("dal-mode");
        document.body.classList.remove("dark-mode");
            header.classList.remove("dark-mode");
        }
      });

   //portfolio
    function notification(message) {
        if('Notification' in window){
            Notification.requestPermission().then(function(result) {
                if(result === 'granted'){
                    new Notification('Form Submitted',{
                        body: message
                    });
                }
            });
        }
    }
    
    form.addEventListener("submit",(event) =>{
        event.preventDefault();
        nameError.textContent ="";
        emailError.textContent ="";
        messageError.textContent ="";
        phoneError.textContent="";
        
        let valid = true;
        if (!(emailRadio.checked && phoneRadio.checked)) {
            valid = true;
        }
        
       
        if(emailField.value.trim()===""){
            emailError.textContent = "Email field empty";
            valid = false;
        }
        if(nameField.value.trim()===""){
            nameError.textContent = "Name field empty";
            valid = false;
        }
        if(message.value.trim()===""){
            messageError.textContent = "Message blank";
            valid = false;
        }
        const phoneNumber = phoneField.querySelector('input').value.trim();
        if(!phonePattern.test(phoneNumber) && !emailRadio.checked){
            phoneField.style.display = 'block';
            phoneError.textContent = "Not a valid phone number";
            valid = false;
            
        } else {
            phoneError.textContent ="";
        }
        if(!valid){
            return;
        }else{
            success.style.display = 'block';
            notification('Form successfully submitted');
            setTimeout(function(){
                location.reload();
            }, 2000);
            
            
        }




    });
    
    phoneRadio.addEventListener('change', function() {
       
        if (phoneRadio.checked) {
            phoneField.style.display = 'block';
            phoneField.required = true;
            phoneError.textContent = "";
          
        } else {
            phoneField.style.display = 'none';
            phoneField.required = false;
            phoneError.textContent ="";
            return;
        }
       
    });
    emailRadio.addEventListener('change', function(){
        if(emailRadio.checked){
            phoneField.style.display = 'none';
            phoneField.required = false;
            
        }
    });

 
 
 
});