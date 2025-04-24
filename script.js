const nombre = document.getElementById("nombre");
const dni = document.getElementById("dni");
const apellido = document.getElementById("apellido");
const cargar = document.getElementById("cargar");
const historial = document.getElementById("historial");
const mostrar = document.getElementById("mostrar");
const eliminar = document.getElementById("eliminar");

const personas = [];

cargar.addEventListener("click", function() {
    if (nombre.value === "" || apellido.value === "" || dni.value === "") {
    alert("Por favor completá todos los campos.");
    return;
    }

    const persona = nombre.value + " " + apellido.value + " " + dni.value;
    personas.push(persona);

    nombre.value = "";
    apellido.value = "";
    dni.value = "";

    actualizarHistorial();
});

eliminar.addEventListener("click", function() {
    if (personas.length === 0) {
    alert("No hay personas para eliminar.");
    return;
    }
    personas.pop();
    actualizarHistorial();
});

mostrar.addEventListener("click", function() {
    if (personas.length === 0) {
    alert("No hay personas cargadas.");
    } else {
    alert("Última persona cargada: " + personas[personas.length - 1]);
    }
});

function actualizarHistorial() {
    historial.innerHTML = "";
    for (let i = 0; i < personas.length; i++) {
    const li = document.createElement("li");
    li.textContent = personas[i];
    historial.appendChild(li);
    }
}
