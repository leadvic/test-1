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
