// Variables estáticas con información de los equipos
const equipoLocalNombre = "Argentina";
const equipoLocalGrupo = "Grupo A";
const equipoLocalPais = "Sudamérica";

const equipoVisitanteNombre = "Francia";

// Funcionalidad obligatoria: Mensaje de bienvenida al cargar la página
window.onload = function() {
    alert("¡Bienvenido al Gestor del Mundial!\nPróximo partido destacado: " + equipoLocalNombre + " (" + equipoLocalGrupo + ") vs " + equipoVisitanteNombre);
};

// Validación lógica: Compara los resultados ingresados en el formulario
function validarResultado(event) {
    event.preventDefault(); // Evita que la página se recargue

    const golesLocal = parseInt(document.getElementById("goles-local").value);
    const golesVisitante = parseInt(document.getElementById("goles-visitante").value);

    // Estructura de comparación condicional (if / else)
    if (golesLocal > golesVisitante) {
        alert("¡Resultado Validado!\nEl equipo ganador es " + equipoLocalNombre + ". ¡Sumó 3 puntos en el " + equipoLocalGrupo + "!");
    } else if (golesVisitante > golesLocal) {
        alert("¡Resultado Validado!\nEl equipo ganador es " + equipoVisitanteNombre + ". " + equipoLocalNombre + " perdió este encuentro.");
    } else {
        alert("¡Resultado Validado!\nEl encuentro terminó en empate. Ambos equipos suman 1 punto.");
    }
}