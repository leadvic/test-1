function registrar() {
  var regEmail = document.getElementById('regEmail').value;
  var regPass = document.getElementById('regPass').value;

  firebase.auth().createUserWithEmailAndPassword(regEmail, regPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

function login() {
  var logEmail = document.getElementById('logEmail').value;
  var logPass = document.getElementById('logPass').value;


  firebase.auth().signInWithEmailAndPassword(logEmail, logPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('existe usuario activo');
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo');
      // ...
    }
  });
  email - password.html
}
observador();