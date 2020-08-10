// base de datos
  
var db = firebase.firestore();
  
function guardar (){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    db.collection("informacion").add({
        nombre: nombre,
        apellido: apellido
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

// Leer

var tabla = document.getElementById('tabla');

db.collection("informacion").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(`${doc.id} => ${doc.data().nombre}`);
        tabla.innerHTML += `
        <tr>
            <th>${doc.id}</th>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().apellido}</td>
            <td><a onclick="eliminar('${doc.id}')" class="button">Eliminar</a></td>
            <td><a onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().apellido}')" class="button">Editar</a></td>
        </tr>
        `
    });
});

// borrar

function eliminar(id){
    db.collection("informacion").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

// editar

function editar(id,nombre,apellido){
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar'

    boton.onclick = function(){
        var washingtonRef = db.collection("informacion").doc(id);
        // Set the "capital" field of the city 'DC'
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        return washingtonRef.update({
            nombre: nombre,
            apellido: apellido
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = 'Guardar';
            document.getElementById('nombre').value = "";
            document.getElementById('apellido').value = "";
            boton.onclick = guardar;
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

