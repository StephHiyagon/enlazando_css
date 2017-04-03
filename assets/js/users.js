//Carga todos los usuarios al local storage
window.addEventListener('load',function() {
  var validUsers = getItemFromStorage('users');
  if (validUsers == null) {
    validUsers = [];
    validUsers.push({ email: "steph@gmail.com", password: "1234"});
    validUsers.push({ email: "shiyagon@laboratoria.la",  password: "4321"});
    addItemToStorage("users",validUsers);
  }
});
