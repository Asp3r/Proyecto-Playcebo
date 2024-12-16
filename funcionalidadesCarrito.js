// ------------- Testing -----------------------

//resetear local storage:

const resetearLocalStorage = document.getElementById("boton-resetear-localstorage");

// resetearLocalStorage.addEventListener("click", 
//     () => {
//         localStorage.clear();
//         console.log("local storage limpio!");
//     }
// );

//------------  ELEMENTOS DEL DOM CAPTURADOS  ------------

//Botones de testeo del cartel de carrito vacio:

// const botonNoMostrarCarritoVacio = document.querySelector(".boton-debug");
// const botonSiMostrarCarritoVacio = document.querySelector(".boton-debug-2");
const carritoVacio = document.querySelector(".carrito-vacio");

//Ajedrez

const agregarAjedrez = document.getElementById("carrito-ajedrez");
const botonEliminarAjedrez = document.getElementById("eliminarAjedrez");
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

// let itemsEnCarrito = 0;

//los futuros booleanos que me diran si un elemento ya esta en el carrito o no

//El if verifica si existe la variable itemsEnCarrito. Si no existe, entra al if.

if (!localStorage.getItem("itemsEnCarrito")) {

    //Si entro al if, es porque no hay nada en el localStorage, asi que inicializo todas las variables aqui
    localStorage.setItem("itemsEnCarrito", "0");

    localStorage.setItem("ajedrezCarrito", "false");
    localStorage.setItem("rompecabezasCarrito", "false");
    localStorage.setItem("spinnerCarrito", "false");
    localStorage.setItem("pistaCarrito", "false");
    localStorage.setItem("masterballCarrito", "false");
    localStorage.setItem("tortugasCarrito", "false");
    
}



//Variable auxiliar que voy a usar para incrementar y deccrementar el numero de items en el carrito:
let itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));

console.log("carrito num: " + localStorage.getItem("itemsEnCarrito"))

//------------  LISTENERS  ------------

console.log("items en carrito al inicio: " + parseInt(localStorage.getItem("itemsEnCarrito")));


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

// VERIFICO SI HAY ELEMENTOS QUE QUEDARON EN EL CARRITO EN LA ANTERIOR SESION, SI LOS HAY, LOS CARGO YA POR DEFECTO EN LA PAGINA

if (localStorage.getItem("ajedrezCarrito") === "true") {
    
    //Por si acaso, antes de remover la clase, me fijo si tiene la clase de por si

    if (ajedrezEnElCarrito.classList.contains("ajedrez-no-mostrar")) {
        ajedrezEnElCarrito.classList.remove("ajedrez-no-mostrar");
     
    }

    //Le agrega la clase para esconder el mensaje de "carrito vacio"
        
    if (!(carritoVacio.classList.contains("carrito-vacio-true"))) {
        carritoVacio.classList.add("carrito-vacio-true") 
    }  

}

if (localStorage.getItem("rompecabezasCarrito") === "true") {
    
    //Por si acaso, antes de remover la clase, me fijo si tiene la clase de por si

    if (rompecabezasEnElCarrito.classList.contains("rompecabezas-no-mostrar")) {
        rompecabezasEnElCarrito.classList.remove("rompecabezas-no-mostrar");
    }

    //Le agrega la clase para esconder el mensaje de "carrito vacio"
        
    if (!(carritoVacio.classList.contains("carrito-vacio-true"))) {
        carritoVacio.classList.add("carrito-vacio-true") 
    }  

}

if (localStorage.getItem("spinnerCarrito") === "true") {
    
    //Por si acaso, antes de remover la clase, me fijo si tiene la clase de por si

    if (spinnerEnElCarrito.classList.contains("spinner-no-mostrar")) {
        spinnerEnElCarrito.classList.remove("spinner-no-mostrar");
    }

    //Le agrega la clase para esconder el mensaje de "carrito vacio"
        
    if (!(carritoVacio.classList.contains("carrito-vacio-true"))) {
        carritoVacio.classList.add("carrito-vacio-true") 
    }  

}

if (localStorage.getItem("pistaCarrito") === "true") {
    
    //Por si acaso, antes de remover la clase, me fijo si tiene la clase de por si

    if (pistaEnElCarrito.classList.contains("pista-no-mostrar")) {
        pistaEnElCarrito.classList.remove("pista-no-mostrar");
    }

    //Le agrega la clase para esconder el mensaje de "carrito vacio"
        
    if (!(carritoVacio.classList.contains("carrito-vacio-true"))) {
        carritoVacio.classList.add("carrito-vacio-true") 
    }  

}

if (localStorage.getItem("masterballCarrito") === "true") {
    
    //Por si acaso, antes de remover la clase, me fijo si tiene la clase de por si

    if (masterballEnElCarrito.classList.contains("masterball-no-mostrar")) {
        masterballEnElCarrito.classList.remove("masterball-no-mostrar");
    }

    //Le agrega la clase para esconder el mensaje de "carrito vacio"
        
    if (!(carritoVacio.classList.contains("carrito-vacio-true"))) {
        carritoVacio.classList.add("carrito-vacio-true") 
    }  

}

if (localStorage.getItem("tortugasCarrito") === "true") {
    
    //Por si acaso, antes de remover la clase, me fijo si tiene la clase de por si

    if (tortugasEnElCarrito.classList.contains("tortugas-no-mostrar")) {
        tortugasEnElCarrito.classList.remove("tortugas-no-mostrar");
    }

    //Le agrega la clase para esconder el mensaje de "carrito vacio"
        
    if (!(carritoVacio.classList.contains("carrito-vacio-true"))) {
        carritoVacio.classList.add("carrito-vacio-true") 
    }  

}




//-----------------------------------------------------------------------------------------------


//AGREGA EL AJEDREZ AL CARRITO DESDE SU CARD

agregarAjedrez.addEventListener("click", 
    () => {

        if (ajedrezEnElCarrito.classList.contains("ajedrez-no-mostrar")){

            ajedrezEnElCarrito.classList.remove("ajedrez-no-mostrar");
            // itemsEnCarrito++; 

            //Sumo 1 a la cantidad de items que hay en el carrito.
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux++;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            //Le aviso al localStorage que ahora ajedrez SI eta en el carrito.
            localStorage.setItem("ajedrezCarrito", "true");


            console.log("items en carrito despues de SUMAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

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

            //Le aviso a localstorage que ya NO esta en el carrito
            localStorage.setItem("ajedrezCarrito", "false");

            // itemsEnCarrito--;

            //Restar 1 al nunmero de items que hay en el carrito:
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux--;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de RESTAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

            //En el caso de que ese haya sido el ultimo item del carrito, muestra el mensaje de carrito vacio.

            if (parseInt(localStorage.getItem("itemsEnCarrito")) == 0) {
                
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

            localStorage.setItem("rompecabezasCarrito", "true");

            // itemsEnCarrito++; 

            //Sumo 1 a la cantidad de items que hay en el carrito.
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux++;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de SUMAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

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

            localStorage.setItem("rompecabezasCarrito", "false");

            // itemsEnCarrito--;

            //Restar 1 al nunmero de items que hay en el carrito:
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux--;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de RESTAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

            //En el caso de que ese haya sido el ultimo item del carrito, muestra el mensaje de carrito vacio.

            if (parseInt(localStorage.getItem("itemsEnCarrito")) == 0) {
                
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

            localStorage.setItem("spinnerCarrito", "true");

            // itemsEnCarrito++;

            //Sumo 1 a la cantidad de items que hay en el carrito.
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux++;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de SUMAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

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

            localStorage.setItem("spinnerCarrito", "false");

            //Restar 1 al nunmero de items que hay en el carrito:
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux--;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);
            
            console.log("items en carrito despues de RESTAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

            //En el caso de que ese haya sido el ultimo item del carrito, muestra el mensaje de carrito vacio.

            if (parseInt(localStorage.getItem("itemsEnCarrito")) == 0) {
                
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

            localStorage.setItem("pistaCarrito", "true");

            //Sumo 1 a la cantidad de items que hay en el carrito.
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux++;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de SUMAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

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

            localStorage.setItem("pistaCarrito", "false");

            //Restar 1 al nunmero de items que hay en el carrito:
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux--;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de RESTAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

            //En el caso de que ese haya sido el ultimo item del carrito, muestra el mensaje de carrito vacio.

            if (parseInt(localStorage.getItem("itemsEnCarrito")) == 0) {
                
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

            localStorage.setItem("masterballCarrito", "true");

            //Sumo 1 a la cantidad de items que hay en el carrito.
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux++;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de SUMAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

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

            localStorage.setItem("masterballCarrito", "false");

            //Restar 1 al nunmero de items que hay en el carrito:
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux--;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de RESTAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

            //En el caso de que ese haya sido el ultimo item del carrito, muestra el mensaje de carrito vacio.

            if (parseInt(localStorage.getItem("itemsEnCarrito")) == 0) {
                
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

            localStorage.setItem("tortugasCarrito", "true");

            //Sumo 1 a la cantidad de items que hay en el carrito.
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux++;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de SUMAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

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

            localStorage.setItem("tortugasCarrito", "false");

            //Restar 1 al nunmero de items que hay en el carrito:
            itemsCarritoAux = parseInt(localStorage.getItem("itemsEnCarrito"));
            itemsCarritoAux--;
            localStorage.setItem("itemsEnCarrito", itemsCarritoAux);

            console.log("items en carrito despues de RESTAR 1: " + parseInt(localStorage.getItem("itemsEnCarrito")));

            //En el caso de que ese haya sido el ultimo item del carrito, muestra el mensaje de carrito vacio.

            if (parseInt(localStorage.getItem("itemsEnCarrito")) == 0) {
                
                if (carritoVacio.classList.contains("carrito-vacio-true")){
                    carritoVacio.classList.remove("carrito-vacio-true")
                };

            }

            //Para testeos
            console.log("clase agregada!");

        }

    }
);