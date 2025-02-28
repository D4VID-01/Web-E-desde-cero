
let listaDeComentarios =[];
let listaDeDates =[];

//Función que empuja los comentarios a un array
function agregarComentarios(){
    let comentario = document.getElementById('comentarioUsuario');

    if(comentario.value.trim()===''){
        comentario.placeholder='Este campo debe ser llenado antes...'
    } else{

        //Se añade comentario de usuario como elemento de un array
        listaDeComentarios.unshift(comentario.value) //Se utiliza unshift para agragar el elemento al principio del array y no al final (push)
        comentario.value='';
        comentario.placeholder='Escribe tu comentario aquí...';
        console.log(listaDeComentarios);

        //Uso del constructor Date
        const date = new Date();
        let fecha = date.toLocaleDateString();
        let hora = date.toLocaleTimeString('es-MX', {hour: 'numeric', minute: 'numeric', hour12:true});
        //Se añade fecha como elemento de un array
        let infoDate = `Publicado el ${fecha} a las ${hora}`;
        listaDeDates.unshift(infoDate);

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

        //Creación de un div para fecha y hora
        let fechaHora = document.createElement('div');
        fechaHora.textContent = listaDeDates[i];
       

        //Creación de un parrafo
        let parrafo = document.createElement('p'); 
        parrafo.textContent = listaDeComentarios[i];  //Asiganción de elemento de array por índice 

        //Creación de un boton
        let buttonEliminar = document.createElement('button');
        buttonEliminar.innerHTML = '<svg id="iconDelete" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
            //Forma de eliminar comentario - Escuchador de evento y metodo splice
        buttonEliminar.addEventListener('click', function(){
            listaDeComentarios.splice(i, 1); //Se usa splice(i, 1) para eliminar 1 elemento desde la posición i.
            listaDeDates.splice(i, 1);
            mostrarComentario(); //En caso de ser eliminado se reliza recursividad
        });

        //Identar fechaHora, parrafo y boton generados en el "div" generado
        contenedor.appendChild(fechaHora);
        contenedor.appendChild(parrafo);
        contenedor.appendChild(buttonEliminar);
       
        //Identar el div generado en el div con id="campoDeLista"
        lista.appendChild(contenedor);
    }
}