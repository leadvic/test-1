function registrar() {
  var regEmail = document.getElementById('regEmail').value;
  var regPass = document.getElementById('regPass').value;
  var regPass2 = document.getElementById('regPass2').value;

  if (regPass == regPass2) {
    firebase.auth().createUserWithEmailAndPassword(regEmail, regPass)
      .then(function() {
        verificar();
        location.href = "index.html";
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  } else {
    alert('Las contraseñas no coinciden');
  }
}

function login() {
  var logEmail = document.getElementById('logEmail').value;
  var logPass = document.getElementById('logPass').value;

  firebase.auth().signInWithEmailAndPassword(logEmail, logPass)
    .then(function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user.emailVerified) {
          location.href = "main.html";
        } else {
          alert('Revise su correo para verificar');
        }
      })
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Correo o contraseña incorrecta');
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

      console.log('******************');
      console.log(user.emailVerified);
      console.log('******************');

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

function cerrar() {
  firebase.auth().signOut()
    .then(function() {
      console.log('Saliendo...');
      location.href = 'index.html';
    })
    .catch(function(error) {
      console.log(error);
    })

}

function verificar() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    // Email sent.
    console.log('Enviando correo...');
  }).catch(function(error) {
    // An error happened.}
    console.log(error);
  });
}

// Upload a File to FireBase

var img = document.getElementById('img');

let file = {};

function chooseFile(e) {
  file = e.target.files[0];
}

function uploadFile() {
  firebase.storage().ref('users/' + auth.user.uid + '/profile.jpg').put(file).then(function () {
    console.log('uploaded succesfully')
  })
}
