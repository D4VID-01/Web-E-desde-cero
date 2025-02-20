
let listaDeComentarios =[];

//Función que empuja los comentarios a un array
function agregarComentarios(){
    let comentario = document.getElementById('comentarioUsuario');

    if(comentario.value===''){
        comentario.placeholder='Este campo debe ser llenado antes...'
    } else{
        listaDeComentarios.unshift(comentario.value)
        comentario.value='';
        comentario.placeholder='Escribe tu comentario aquí...';
        mostrarComentario();
    }
}



//Función que muestra los comentarios en el DOM
function mostrarComentario(){

    let lista = document.getElementById('campoDeLista');
    lista.innerHTML ='';


    for(let i=0; i<listaDeComentarios.length; i++){  
        //Creación de un div 
        let contenedor = document.createElement('div');
        
        //Creación de un parrafo
        let parrafo = document.createElement('p'); 
        parrafo.textContent = listaDeComentarios[i];  //Asiganción de elemento de array por índice 

        //Creación de un boton
        let buttonEliminar = document.createElement('button');
        buttonEliminar.textContent = 'Eliminar'
            //Forma de eliminar comentario - Escuchador de evento y metodo splice
        buttonEliminar.addEventListener('click', function(){
            listaDeComentarios.splice(i, 1);
            mostrarComentario(); //En caso de ser eliminado se reliza recursividad
        });

        //Identar parrafo y boton generados en el "div" generado
        contenedor.appendChild(parrafo);
        contenedor.appendChild(buttonEliminar);
       
        //Identar el dv generado en el div con id="campoDeLista"
        lista.appendChild(contenedor);
    }
}