function reset() {
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("phone").value ="";
    document.getElementById("inquiry").value ="catering";
    document.getElementById("info").value ="";
    return
}


function validate() {

  var name = document.forms["contactForm"]["name"].value;
  var phone = document.forms["contactForm"]["phone"].value;
  if (phone.length !==10){
    alert("Please enter a valid phone number with area code")
    return false
  }else{
  alert("Thank you " + name + " for your inquiry");
  reset()
  return false;
  }
}
