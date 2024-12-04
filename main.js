const form = document.querySelector(".seccion-contacto");

form.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const name = document.getElementById('nombre').value;
    const reason = document.getElementById('motivo').value;
    const mail = document.getElementById('correo').value;

    console.log("Nombre:", name);
    console.log("Motivo:", reason);
    console.log("Correo:", mail);

    alert("Hola " + name + ", su correo es " + mail + " y su motivo de contacto es: \n" + reason);
});

