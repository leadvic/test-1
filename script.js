function registrar() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}
function login(){
    var email2 = document.getElementById('email2').value;
    var contrasena2 = document.getElementById('contrasena2').value;


    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
}

function observador(){
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
      });email-password.html
}
observador();