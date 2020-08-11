    /* DATOS OBTENIDOS EN VARIABLES*/
function validar(){
// NOMBRE
    var nombre = document.getElementById("nombre").value;
        if(typeof nombre == 'string' && nombre === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (nombre.length>30){
            alert("El nombre es muy largo");
            return false;
        }
// APELLIDOS
    var apellidos = document.getElementById("apellidos").value;
        if(apellidos === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (apellidos.length>80){
            alert("El apellido es muy largo");
            return false;
        }
// CORREO
    var correo = document.getElementById("correo").value;
        if(correo === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (correo.length>100){
            alert("El correo es muy largo");
            return false;
        }
// USUARIO
    var usuario = document.getElementById("usuario").value;
        if(usuario === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (usuario.length>20){
            alert("El usuario es muy largo");
            return false;
        }
// PASSWORD
    var clave = document.getElementById("pass").value;
        if(clave === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
// TELEFONO
    var telefono = parseInt(document.getElementById("telefono").value);
        if (isNaN(telefono)) {
            alert("Incluir solo números");
            return false;
        }
        if(telefono === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (telefono.length>15){
            alert("El teléfono es muy largo");
            return false;
        }
    else {
        alert("Buen día " + nombre + " " + apellidos + ", bienvenido!");
        alert("Usuario: " + usuario + ", Contraseña: " + clave);
    }
    

/* VALIDACION */
    console.log("nombre: ", typeof nombre);
    console.log("apellidos: ", apellidos);
    console.log("correo: ", correo);
    console.log("ususario: ", usuario);
    console.log("clave: ", clave);
    console.log("telefono: ", telefono);
return false;
}