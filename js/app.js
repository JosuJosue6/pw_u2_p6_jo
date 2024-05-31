/*Archivo de configuracion de la aplicacion*/
console.log(Vue);

const estudiantes = [{ nombre: "Josue", apellido: "Ocapana" },
{ nombre: "Test1", apellido: "Test1" },
{ nombre: "Test2", apellido: "Test2" },
{ nombre: "Test3", apellido: "Test3" },
{ nombre: "Test4", apellido: "Test4" }
];

const app = Vue.createApp({
    /*Vue trabaja a traves de opciones con funcionalidades definidas
    Conocidas como Options API, que es similar a declarar metodos, pero
    son conjuntos de opciones con una funcionalidad deterinada o una funcionalidad especifica
    para declarar o programar funcionalidad en JS usa la programacion declarativa que 
    se hace atraves de {}, donde se pone el codigo de JS, dentro de las {}
    se pone codigo JS*/

    /*Un beneficio es poder insertar cualquier sentencia JS en una declaracion con ()
    Como tal esto no es buena practica, pues JS es para toda la logica 
    que permite manejar los componentes visuales, por ejemplo al hacer u 
    formulario y crear un objeto con atributos, por ello en Js se programa toda la LOGICA 
    DE PRESETACION (Logica para que la pag web funcione), en esta se puede incluir 
    elementos HTML pero no es una buena practica.
    Por esto surge el patron de diseño MVC, el mas simple es la vista, modelo(conjunto de datos q maneja la vista, elementos que se manejan "objeto que engloba la vista")  
    controlador (Controla todas las peticiones de la vista), 
    */
    /*template: `
     <h1> Hola mundo desde Vue.JS</h1>
     <p>
     {{1+1}}
     </p>
     <p>{{[1,2,3,4]}}</p>
     <p>{{true ? 'verdadero':'False'}}</p>
 
     `*/

    /**propiedades reactivas */
    data() {
        return {
            /**Declara un atributo simple */
            mensaje: "Hola mundo propiedad reactiva",
            valor: 7,
            lista: estudiantes,
            nombre: null,
            apellido: null
        }
    },

    /*Metodos
    Cada funcionalidad va dentro de un methods*/

    methods: {
        /*Toda propiedad reactiva que va dentro de un archivo JS
        Va con la palabra this */
        cambiarTexto() {
            this.mensaje = "Texto Cambiado";
        },

        sumar() {
            this.valor = this.valor + 100;
        },

        agregar(){

            console.log(this.nombre);
            console.log(this.apellido);
            const nuevo = {
                nombre:this.nombre,
                apellido:this.apellido
            }

            this.lista.unshift(nuevo);
            this.resetear();
        },

        resetear(){
            this.apellido = null;
            this.nombre = null
        },

        agregar2(){
            /*console.log(charCode);
            if(charCode !== 13)
                return;*/

            if(this.nombre!==null && this.apellido!== null){
                this.agregar();
            }


        }

    }

});

app.mount("#myApp");
