
//CAPTURO EL BOTON QUE VOY A USAR EN EL DEBUG Y EL DIV CORRESPONDIENTE AL CARRITO VACIO:

const botonNoMostrarCarritoVacio = document.querySelector(".boton-debug");

const carritoVacio = document.querySelector(".carrito-vacio");

const botonSiMostrarCarritoVacio = document.querySelector(".boton-debug-2");

const agregarAjedrez = document.getElementById("carrito-ajedrez");

const ajedrezEnElCarrito = document.getElementById("ajedrezEnCarrito");


// AGREGAR LISTENER PARA DEJAR DE MOSTRAR EL MENSAJE DE CARRITO VACIO

botonNoMostrarCarritoVacio.addEventListener("click", 
    () => {

    // Añade la clase al elemento

    carritoVacio.classList.add("carrito-vacio-true");
    console.log("Clase 'carrito-vacio-true' añadida.");

    }
);

//AGREGAR LISTENER PARA VOLVER A MOSTRAR EL MENSAJE DE CARRITO VACIO

botonSiMostrarCarritoVacio.addEventListener("click", 
    () => {

        //Primero se fija si el elemento tiene la clase carrito-vacio-true. Si la tiene, la elimina. Si no la tiene, no hace nada.

        if (carritoVacio.classList.contains("carrito-vacio-true")){
            carritoVacio.classList.remove("carrito-vacio-true")
        };

    }
);

agregarAjedrez.addEventListener("click", 
    () => {

        if (ajedrezEnElCarrito.classList.contains("ajedrez-no-mostrar")){
            ajedrezEnElCarrito.classList.remove("ajedrez-no-mostrar");
            
            //Para testeos
            console.log("clase encontrada y removida!");
        } else{
            //Para testeos
            console.log("clase no encontrada...");
        };

    }
);
