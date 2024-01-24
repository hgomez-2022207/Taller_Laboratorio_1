function agrandar(img) {
    img.style.width = "20%";
    img.style.height = "20%";
    img.style.position = "fixed";
    img.style.top = "30vh";
    img.style.left = "10vh";
    img.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    img.style.zIndex = "1";
    img.onclick = function() {
        restoreSize(img);
    };
}

function restoreSize(img) {
    img.style.width = "";
    img.style.height = "";
    img.style.position = "";
    img.style.top = "";
    img.style.left = "";
    img.style.backgroundColor = "";
    img.style.zIndex = "";
    img.onclick = function() {
        agrandar(img);
    };
}

function enviaForm(name,email){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    alert("Bienvenido: "+name+" "+asunto);
}

/*
let mostrar = document.getElementById('name','email').value;

//el formulario se envia
alert(`Usuario creado con éxito correctamente. Bienvenido, ${usuario}.`);

*/
function mostrar(name,email){
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("email").value;
    alert("Bienvenido: "+nombre+" correo: "+correo)

}



/*windows.alet()*/