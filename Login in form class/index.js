const formInputChange = function(input)
{
    //console.log(input.value);
    if(input.id === "firstNameInput" || input.id === "lastNameInput")
    {
        if(input.value.length <=2 && input.value.length <=15 )
        {
            input.classList .add("is-valid");
            input.classList .remove("is-invalid");
        }
        else
        {
           input.classList .add("is-invalid");
           input.classList .remove("is-valid");
        }
       if(input.value.length >=2 && input.value.length <=15)
       {
        input.classList .add("is-valid");
        input.classList .remove("is-invalid");
       } 
       else{
        input.classList .add("is-invalid");
        input.classList .remove("is-valid");
       }
    }

    // Validator cu function parola sa fie una strong//
    if (input.id === "passwordInput") {
    if(validator.isStrongPassword(input.value) === true)
   {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
   }
   else
   {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
   }
}
}
  if(input.id === "emailInput"){
   if(validator.isEmail(input.value) === true)
   {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
   }   
  else
  {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
  }
  }