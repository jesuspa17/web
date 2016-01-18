
// SCRIPT HELLO WORLD

$( document ).ready(function() {

   var maximoElementos = 5;
   var contadorAdd = 0;

    // Your code here.
    alert("Hello World!");

    // Selector de elemento
    $("li").on("click",function() {
      alert("seguro que has hecho click en un li");
    });

    // Selector de ID
    $("a#add-elemento").on("click",function() {
      if(contadorAdd<maximoElementos) {
        $("ul#listado").append('<li class="list-group-item">Ahí lo tienes</li>');
        contadorAdd++;
      } else {
        alert("Ya has introducido el máximo de elementos");
      }
    });

    $("a#delete-elemento").on("click",function() {
      if(contadorAdd>0) {
        contadorAdd--;
      }
      // Pseudo selector con función :last-child
      $("ul#listado li:last-child").remove();
    });




});
