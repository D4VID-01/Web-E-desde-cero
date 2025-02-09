let calificacionUsuario = Number(prompt('Inserta la puntuación obtenida'));


if (isNaN(calificacionUsuario) || calificacionUsuario < 1 || calificacionUsuario > 100) {
    alert('Tu puntuación es inválida. Debe ser un número entre 1 y 100.');
} else if (calificacionUsuario >= 90) {
    alert('Desempeño: Excelente');
} else if (calificacionUsuario >= 75) {
    alert('Desempeño: Bueno');
} else if (calificacionUsuario >= 60) {
    alert('Desempeño: Suficiente');
} else {
    alert('Desempeño: Reprobado');
}
