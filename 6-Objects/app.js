
const libro = {
    titulo: 'Harry Potter',
    autor: 'J.K. Rowling',
    año:1997,
    estado:'disponible',

    capitulos:[],

    describirLibro:function(){
        alert(`El libro titulado: ${this.titulo}, escrito por ${this.autor} en el año ${this.año} se encuentra ${this.estado}.`);
    },

    agregarCapitulo:function(){
        let capitulo = prompt('Añade el capítulo aquí:');
        this.capitulos.push(capitulo);
        alert(`Se agregó el capítulo ${capitulo}.`);
        alert(`Lista de capítulos actualizada: ${libro.capitulos}`);
    },

    eliminarCapitulo:function(){
        let capitulo = prompt('Escribe el capítulo a eliminar aquí:');
        let indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            alert(`Se eliminó el capítulo: ${capitulo}.`);
            alert(`Lista de capítulos actualizada: ${libro.capitulos}`);
        } else {
            alert(`El capítulo ${capitulo} no existe en la lista.`);
         }
    }
}




