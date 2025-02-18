let librosLeidos=[];


function agregarLibro(){

    let libro = prompt("Inserta el titulo del libro aquí:");
    while(libro.toLowerCase() !== "pausa"){

        if(libro === "" || librosLeidos.includes(libro.toLowerCase())){
            alert('Este titulo ya ha sido ingresado o no has escrito nada aún');
        } else{
            librosLeidos.push(libro.toLowerCase());
            alert(`El libro ${libro} ha sido agregado.`);
        }

        libro = prompt("Inserta otro titulo de libro, si ya son todos escribe: pausa.");
    }
}


function mostrarLibrosLeidos(){
    
    for(let i = 0; i < librosLeidos.length; i++){
        console.log(`Libro: ${librosLeidos[i]} - Leído`);
    }
}


agregarLibro();
mostrarLibrosLeidos();



