// Declara un arreglo llamado frutas con varios tipos de frutas
let listaDeFrutas = ['mango', 'plátano', 'manzana', 'naranja', 'mango', 'pera', 'plátano', 'manzana', 'fresa', 'fresa'];

// Crea un objeto para almacenar la cantidad de cada tipo de fruta
let conteoFrutas = {};

// Usa un ciclo for para recorrer el arreglo y contar las frutas
for (let i = 0; i < listaDeFrutas.length; i++) {
    let fruta = listaDeFrutas[i];
    if (conteoFrutas[fruta] == null) {
        conteoFrutas[fruta] = 1;
    } else {
        conteoFrutas[fruta]++;
    }
}

// Imprime en la consola la cantidad de cada tipo de fruta
for (let fruta in conteoFrutas) {
    console.log(fruta + ': ' + conteoFrutas[fruta]);
}

