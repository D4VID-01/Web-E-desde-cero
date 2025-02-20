
let listaDeComentarios =[];

//Función que empuja los comentarios a un array
function agregarComentarios(){
    let comentario = document.getElementById('comentarioUsuario');

    if(comentario.value===''){
        comentario.placeholder='Este campo debe ser llenado antes...'
    } else{
        listaDeComentarios.push(comentario.value)
        comentario.value='';
        comentario.placeholder='Escribe tu comentario aquí...';
    }
}

//Función que muestra los comentarios en el DOM
function mostratComentario(){

}