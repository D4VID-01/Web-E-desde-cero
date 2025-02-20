
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
        buttonEliminar.innerHTML = '<svg id="iconDelete" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
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