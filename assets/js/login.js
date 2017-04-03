window.addEventListener('load',function() {

  var loginButton = document.getElementById('js_envia');
  loginButton.addEventListener('click',function() {

    var emailInput = document.getElementById('js_email');
    var passwordInput = document.getElementById('js_password');
    var valid = true;

    if (emailInput.value == "") {
      showMessage("js_email_error","No puede estar vacio");
    } else {
      showMessage("js_email_error","");
    }

    if (passwordInput.value == "") {
      showMessage("js_password_error","No puede estar vacio");
    } else {
      showMessage('js_password_error',"");
    }
     if (!/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(emailInput.value)) {
      showMessage("js_email_error","No es un correo válido");
    } else {
      showMessage('js_email_error',"");
    }

    if (emailInput.value != "" &&
        passwordInput.value != "" &&
        /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(emailInput.value)) {

      if (authenticate(emailInput.value,passwordInput.value)) {
        window.location = 'index.html';
      }
    }

  });
});

function showMessage(element,message) {
  var e = document.getElementById(element);
  e.innerHTML = message;
}

function authenticate(email,password) {
  var validUsers = getItemFromStorage("users");
  if (validUsers != null) {
    var user = validUsers.filter(function(user) {
      return user.email == email;
    })[0];
    if (user != null) {
      return user.email == email && user.password == password;
    }
  }
  return false;
}
