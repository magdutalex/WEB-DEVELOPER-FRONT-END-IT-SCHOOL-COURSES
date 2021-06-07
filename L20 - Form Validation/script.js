const formInputChange = (input) =>
{
  // console.log(input.value); 
  if(input.id === "firstNameInput" || input.id === "lastNameInput")
  {
  if(input.value.length >=2 && input.value.length <=15)
  {
     // console.log(input.value);
      input.classList .add("is-valid");
      input.classList .remove("is-invalid");
  }
  else
  {
    input.classList .add("is-invalid");
    input.classList .remove("is-valid");
  }
  if(input.length > 0 && input.value[0]  === input.value[0].toUppercase()){
      
  }
  }
  if(input.id === "lastNameInput")
  {
  if(input.value.length >=2 && input.value.length <=15 )
  {
     // console.log(input.value);
      input.classList .add("is-valid");
      input.classList .remove("is-invalid");
  }
  else
  {
    input.classList .add("is-invalid");
    input.classList .remove("is-valid");
  }
  }
   
}

