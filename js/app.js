/*Archivo de configuracion de la aplicacion*/
console.log(Vue);

const app = Vue.createApp({
    /*Vue trabaja a traves de opciones con funcionalidades definidas
    Conocidas como Options API, que es similar a declarar metodos, pero
    son conjuntos de opciones con una funcionalidad deterinada o una funcionalidad especifica
    para declarar o programar funcionalidad en JS usa la programacion declarativa que 
    se hace atraves de {}, donde se pone el codigo de JS, dentro de las {}
    se pone codigo JS*/
   template: `
    <h1> Hola mundo desde Vue.JS</h1>
    <p>
    {{1+1}}
    </p>
    <p>{{[1,2,3,4]}}</p>
    <p>{{true ? 'verdadero':'False'}}</p>

    `
});

app.mount("#myApp");