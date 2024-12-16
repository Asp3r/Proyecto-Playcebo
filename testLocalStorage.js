
//Botones de testeo del cartel de carrito vacio:

// const botonNoMostrarCarritoVacio = document.querySelector(".boton-debug");
// const botonSiMostrarCarritoVacio = document.querySelector(".boton-debug-2");
const carritoVacio = document.querySelector(".carrito-vacio");

//Ajedrez

const agregarAjedrez = document.getElementById("carrito-ajedrez");
const botonEliminarAjedrez = document.getElementById("eliminarAjedrez");
const ajedrezEnElCarrito = document.getElementById("ajedrezEnCarrito");

//------------  VARIABLES GLOBALES  ------------

let itemsEnCarrito = 0;

//AGREGA EL AJEDREZ AL CARRITO DESDE SU CARD

agregarAjedrez.addEventListener("click", 
    () => {

        if (ajedrezEnElCarrito.classList.contains("ajedrez-no-mostrar")){

            ajedrezEnElCarrito.classList.remove("ajedrez-no-mostrar");
            itemsEnCarrito++; //Sumo 1 a la cantidad de items que hay en el carrito.
            console.log("items en carrito despues de SUMAR 1: " + itemsEnCarrito);

            //Elimina el mensaje de "carrito vacio", porque el carrito ya tiene items
            if (!(carritoVacio.classList.contains("carrito-vacio-true"))){

                carritoVacio.classList.add("carrito-vacio-true");
                console.log("Clase 'carrito-vacio-true' añadida.");
        
            }
            
            //Para testeos
            console.log("clase ajedrez-no-mostrar encontrada y removida!");
        } else{
            //Para testeos
            console.log("clase no encontrada...");
        };

    }
);

//-----------------------------------------------------------------------------------------------


//ELIMINAR AJEDREZ DEL CARRITO DE COMPRAS CON EL BOTON DEL CESTO DE BASURA

botonEliminarAjedrez.addEventListener("click", 
    () => {

        //PRIMERO VERIFICA QUE NO TENGA YA LA CLASE PARA NO MOSTRAR. SOLO LA AGREGA SI NO LA TIENE

        if (!(ajedrezEnCarrito.classList.contains("ajedrez-no-mostrar"))){

            ajedrezEnCarrito.classList.add("ajedrez-no-mostrar");
            itemsEnCarrito--;
            console.log("items en carrito despues de RESTAR 1: " + itemsEnCarrito);

            //En el caso de que ese haya sido el ultimo item del carrito, muestra el mensaje de carrito vacio.

            if (itemsEnCarrito == 0) {
                
                if (carritoVacio.classList.contains("carrito-vacio-true")){
                    carritoVacio.classList.remove("carrito-vacio-true")
                };

            }

            //Para testeos
            console.log("clase agregada!");

        }

    }
);



//Sumo 1 a la cantidad de items que hay en el carrito.
itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
itemsCarritoAux++;
localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

//Restar 1 al nunmero de items que hay en el carrito:
itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
itemsCarritoAux--;
localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

localStorage.setItem("ajedrezCarrito", "false");
localStorage.setItem("rompecabezasCarrito", "false");
localStorage.setItem("spinnerCarrito", "false");
localStorage.setItem("pistaCarrito", "false");
localStorage.setItem("masterballCarrito", "false");
localStorage.setItem("tortugasCarrito", "false");