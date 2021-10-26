function validate()
{
  let phoneNumber = document.getElementById('phone').value;
  let phoneRGEX = /^0\d{9}$/;
  let phoneResult = phoneRGEX.test(phoneNumber);
  if (phoneResult == false) 
  alert("Introduceți un număr de telefon valid pentru a vă putea contacta.");
  else
   {
     alert("Veți fi contactat/ă telefonic în cel mai scurt timp pentru a stabili detaliile. Vă mulțumim pentru interesul acordat!");
   let inputNume = document.getElementById("fname");
   
  localStorage.setItem("fname", inputNume.value); 
  let inputPrenume = document.getElementById("lname");
  localStorage.setItem("lname", inputPrenume.value); 
  let inputTelefon = document.getElementById("phone");
  localStorage.setItem("phone", inputTelefon.value); 
  let inputCaine = document.getElementById("dog");
  localStorage.setItem("dog", inputCaine.value); 
  
   }}