
//------------  ELEMENTOS DEL DOM CAPTURADOS  ------------

//Botones de testeo del cartel de carrito vacio:

// const botonNoMostrarCarritoVacio = document.querySelector(".boton-debug");
// const botonSiMostrarCarritoVacio = document.querySelector(".boton-debug-2");
const carritoVacio = document.querySelector(".carrito-vacio");

//Ajedrez

const agregarAjedrez = document.getElementById("carrito-ajedrez");
const botonEliminarAjedrez = document.getElementById("eliminarAjedrez")
const ajedrezEnElCarrito = document.getElementById("ajedrezEnCarrito");

//Rompecabezas:

const agregarRompecabezas = document.getElementById("carrito-rompecabezas");
const botonEliminarRompecabezas = document.getElementById("eliminarRompecabezas");
const rompecabezasEnElCarrito = document.getElementById("rompecabezasEnCarrito");

//Fidget Spinner

const agregarSpinner = document.getElementById("carrito-spinner");
const botonEliminarSpinner = document.getElementById("eliminarSpinner");
const spinnerEnElCarrito = document.getElementById("spinnerEnCarrito");

//Pista de Hot Wheels

const agregarPista = document.getElementById("carrito-pista");
const botonEliminarPista = document.getElementById("eliminarPista");
const pistaEnElCarrito = document.getElementById("pistaEnCarrito");

//Masterball

const agregarMasterball = document.getElementById("carrito-masterball");
const botonEliminarMasterball = document.getElementById("eliminarMasterball");
const masterballEnElCarrito = document.getElementById("masterballEnCarrito");

//Tortugas

const agregarTortugas = document.getElementById("carrito-tortugas");
const botonEliminarTortugas = document.getElementById("eliminarTortugas");
const tortugasEnElCarrito = document.getElementById("tortugasEnCarrito");


//------------  VARIABLES GLOBALES  ------------

let itemsEnCarrito = 0;

//------------  LISTENERS  ------------

console.log("items en carrito al inicio: " + itemsEnCarrito);


// botonNoMostrarCarritoVacio.addEventListener("click", 
//     () => {

    
//     if (!(carritoVacio.classList.contains("carrito-vacio-true"))){

//         carritoVacio.classList.add("carrito-vacio-true");
//         console.log("Clase 'carrito-vacio-true' añadida.");

//     }

//     }
// );

//AGREGAR LISTENER PARA VOLVER A MOSTRAR EL MENSAJE DE CARRITO VACIO

// botonSiMostrarCarritoVacio.addEventListener("click", 
//     () => {


//         if (carritoVacio.classList.contains("carrito-vacio-true")){
//             carritoVacio.classList.remove("carrito-vacio-true")
//         };

//     }
// );

//-----------------------------------------------------------------------------------------------


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

//-----------------------------------------------------------------------------------------------

//AGREGA EL ROMPECABEZAS AL CARRITO DESDE SU CARD

agregarRompecabezas.addEventListener("click", 
    () => {

        if (rompecabezasEnElCarrito.classList.contains("rompecabezas-no-mostrar")){

            rompecabezasEnElCarrito.classList.remove("rompecabezas-no-mostrar");
            itemsEnCarrito++; //Sumo 1 a la cantidad de items que hay en el carrito.
            console.log("items en carrito despues de SUMAR 1: " + itemsEnCarrito);

            //Elimina el mensaje de "carrito vacio", porque el carrito ya tiene items
            if (!(carritoVacio.classList.contains("carrito-vacio-true"))){

                carritoVacio.classList.add("carrito-vacio-true");
                console.log("Clase 'carrito-vacio-true' añadida.");
        
            }
            
            //Para testeos
            console.log("clase rompecabezas-no-mostrar encontrada y removida!");
        } else{
            //Para testeos
            console.log("rompecabezas-no-mostrar no encontrada...");
        };

    }
);

//-----------------------------------------------------------------------------------------------


//ELIMINAR ROMPECABEZAS DEL CARRITO DE COMPRAS CON EL BOTON DEL CESTO DE BASURA

botonEliminarRompecabezas.addEventListener("click", 
    () => {

        //PRIMERO VERIFICA QUE NO TENGA YA LA CLASE PARA NO MOSTRAR. SOLO LA AGREGA SI NO LA TIENE

        if (!(rompecabezasEnElCarrito.classList.contains("rompecabezas-no-mostrar"))){

            rompecabezasEnElCarrito.classList.add("rompecabezas-no-mostrar");
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

//-----------------------------------------------------------------------------------------------


//AGREGA EL FIDGET SPINNER AL CARRITO DESDE SU CARD

agregarSpinner.addEventListener("click", 
    () => {

        if (spinnerEnElCarrito.classList.contains("spinner-no-mostrar")){

            spinnerEnElCarrito.classList.remove("spinner-no-mostrar");
            itemsEnCarrito++; //Sumo 1 a la cantidad de items que hay en el carrito.
            console.log("items en carrito despues de SUMAR 1: " + itemsEnCarrito);

            //Elimina el mensaje de "carrito vacio", porque el carrito ya tiene items
            if (!(carritoVacio.classList.contains("carrito-vacio-true"))){

                carritoVacio.classList.add("carrito-vacio-true");
                console.log("Clase 'carrito-vacio-true' añadida.");
        
            }
            
            //Para testeos
            console.log("clase spinner-no-mostrar encontrada y removida!");
        } else{
            //Para testeos
            console.log("clase no encontrada...");
        };

    }
);

//ELIMINAR FIDGET SPINNER DEL CARRITO DE COMPRAS CON EL BOTON DEL CESTO DE BASURA

botonEliminarSpinner.addEventListener("click", 
    () => {

        //PRIMERO VERIFICA QUE NO TENGA YA LA CLASE PARA NO MOSTRAR. SOLO LA AGREGA SI NO LA TIENE

        if (!(spinnerEnElCarrito.classList.contains("spinner-no-mostrar"))){

            spinnerEnElCarrito.classList.add("spinner-no-mostrar");
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

//-----------------------------------------------------------------------------------------------


//AGREGA PISTA HOT WHEELS AL CARRITO DESDE SU CARD

agregarPista.addEventListener("click", 
    () => {

        if (pistaEnElCarrito.classList.contains("pista-no-mostrar")){

            pistaEnElCarrito.classList.remove("pista-no-mostrar");
            itemsEnCarrito++; //Sumo 1 a la cantidad de items que hay en el carrito.
            console.log("items en carrito despues de SUMAR 1: " + itemsEnCarrito);

            //Elimina el mensaje de "carrito vacio", porque el carrito ya tiene items
            if (!(carritoVacio.classList.contains("carrito-vacio-true"))){

                carritoVacio.classList.add("carrito-vacio-true");
                console.log("Clase 'carrito-vacio-true' añadida.");
        
            }
            
            //Para testeos
            console.log("clase pista-no-mostrar encontrada y removida!");
        } else{
            //Para testeos
            console.log("clase no encontrada...");
        };

    }
);

//ELIMINAR PISTA DEL CARRITO DE COMPRAS CON EL BOTON DEL CESTO DE BASURA

botonEliminarPista.addEventListener("click", 
    () => {

        //PRIMERO VERIFICA QUE NO TENGA YA LA CLASE PARA NO MOSTRAR. SOLO LA AGREGA SI NO LA TIENE

        if (!(pistaEnElCarrito.classList.contains("pista-no-mostrar"))){

            pistaEnElCarrito.classList.add("pista-no-mostrar");
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

//-----------------------------------------------------------------------------------------------


//AGREGA MASTERBALL AL CARRITO DESDE SU CARD

agregarMasterball.addEventListener("click", 
    () => {

        if (masterballEnElCarrito.classList.contains("masterball-no-mostrar")){

            masterballEnElCarrito.classList.remove("masterball-no-mostrar");
            itemsEnCarrito++; //Sumo 1 a la cantidad de items que hay en el carrito.
            console.log("items en carrito despues de SUMAR 1: " + itemsEnCarrito);

            //Elimina el mensaje de "carrito vacio", porque el carrito ya tiene items
            if (!(carritoVacio.classList.contains("carrito-vacio-true"))){

                carritoVacio.classList.add("carrito-vacio-true");
                console.log("Clase 'carrito-vacio-true' añadida.");
        
            }
            
            //Para testeos
            console.log("clase pista-no-mostrar encontrada y removida!");
        } else{
            //Para testeos
            console.log("clase no encontrada...");
        };

    }
);

//ELIMINAR MSTERBALL DEL CARRITO DE COMPRAS CON EL BOTON DEL CESTO DE BASURA

botonEliminarMasterball.addEventListener("click", 
    () => {

        //PRIMERO VERIFICA QUE NO TENGA YA LA CLASE PARA NO MOSTRAR. SOLO LA AGREGA SI NO LA TIENE

        if (!(masterballEnElCarrito.classList.contains("masterball-no-mostrar"))){

            masterballEnElCarrito.classList.add("masterball-no-mostrar");
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

//AGREGA TORTUGAS AL CARRITO DESDE SU CARD


agregarTortugas.addEventListener("click", 
    () => {

        if (tortugasEnElCarrito.classList.contains("tortugas-no-mostrar")){

            tortugasEnElCarrito.classList.remove("tortugas-no-mostrar");
            itemsEnCarrito++; //Sumo 1 a la cantidad de items que hay en el carrito.
            console.log("items en carrito despues de SUMAR 1: " + itemsEnCarrito);

            //Elimina el mensaje de "carrito vacio", porque el carrito ya tiene items
            if (!(carritoVacio.classList.contains("carrito-vacio-true"))){

                carritoVacio.classList.add("carrito-vacio-true");
                console.log("Clase 'carrito-vacio-true' añadida.");
        
            }
            
            //Para testeos
            console.log("clase pista-no-mostrar encontrada y removida!");
        } else{
            //Para testeos
            console.log("clase no encontrada...");
        };

    }
);

//ELIMINAR TORTUGAS DEL CARRITO DE COMPRAS CON EL BOTON DEL CESTO DE BASURA

botonEliminarTortugas.addEventListener("click", 
    () => {

        //PRIMERO VERIFICA QUE NO TENGA YA LA CLASE PARA NO MOSTRAR. SOLO LA AGREGA SI NO LA TIENE

        if (!(tortugasEnElCarrito.classList.contains("tortugas-no-mostrar"))){

            tortugasEnElCarrito.classList.add("tortugas-no-mostrar");
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