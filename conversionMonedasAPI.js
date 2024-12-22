
const API_KEY = "fxr_live_59f64c76ce13f291988d755a8de4fd1fcfac";
const API_URL = "https://api.fxratesapi.com/latest?api_key=";
const API_URL_COMPLETA = API_URL + API_KEY;

// const botonDebugAPI = document.getElementById("debug-api");

const botonConversionHaciaPesos = document.getElementById("boton-a-pesos");
const botonConversionHaciaDolares = document.getElementById("boton-a-dolares");

const precioAjedrezCaja = document.getElementById("precioAjedrez");
const precioAjedrezTexto = document.getElementById("precioAjedrez").innerText;
let precioAjedrezUSD = parseFloat(precioAjedrezTexto.replace("$", "").trim());
let precioAjedrezARS = 0.0;

const precioRompecabezasCaja = document.getElementById("precioRompecabezas");
const precioRompecabezasTexto = precioRompecabezasCaja.innerText;
let precioRompecabezasUSD = parseFloat(precioRompecabezasTexto.replace("$", "").trim());
let precioRompecabezasARS = 0.0;

const precioSpinnerCaja = document.getElementById("precioSpinner");
const precioSpinnerTexto = precioSpinnerCaja.innerText;
let precioSpinnerUSD = parseFloat(precioSpinnerTexto.replace("$", "").trim());
let precioSpinnerARS = 0.0;

const precioPistaCaja = document.getElementById("precioPista");
const precioPistaTexto = precioPistaCaja.innerText;
let precioPistaUSD = parseFloat(precioPistaTexto.replace("$", "").trim());

const precioMasterballCaja = document.getElementById("precioMasterball");
const precioMasterballTexto = precioMasterballCaja.innerText;
let precioMasterballUSD = parseFloat(precioMasterballTexto.replace("$", "").trim());

const precioTortugasCaja = document.getElementById("precioTortugas");
const precioTortugasTexto = precioTortugasCaja.innerText;
let precioTortugasUSD = parseFloat(precioTortugasTexto.replace("$", "").trim());


//----------      PRECIOS QUE APARECEN EN EL CARRITO      ----------//

const ajedrezPrecioEnCarritoCaja = document.getElementById("ajedrezPrecioEnCarrito");
const ajedrezPrecioEnCarritoTexto = ajedrezPrecioEnCarritoCaja.innerText;

const rompecabezasPrecioEnCarritoCaja = document.getElementById("rompecabezasPrecioEnCarrito");
const rompecabezasPrecioEnCarritoTexto = rompecabezasPrecioEnCarritoCaja.innerText;

const spinnerPrecioEnCarritoCaja = document.getElementById("spinnerPrecioEnCarrito");
const spinnerPrecioEnCarritoTexto = spinnerPrecioEnCarritoCaja.innerText;

const pistaPrecioEnCarritoCaja = document.getElementById("pistaPrecioEnCarrito");
const pistaPrecioEnCarritoTexto = pistaPrecioEnCarritoCaja.innerText;

const masterballPrecioEnCarritoCaja = document.getElementById("masterballPrecioEnCarrito");
const masterballPrecioEnCarritoTexto = masterballPrecioEnCarritoCaja.innerText;

const tortugasPrecioEnCarritoCaja = document.getElementById("tortugasPrecioEnCarrito");
const tortugasPrecioEnCarritoTexto = tortugasPrecioEnCarritoCaja.innerText;

let precioFinalCaja = document.getElementById("precioFinal");
let precioFinalTexto = precioFinalCaja.innerText;
let precioCarritoUSD = parseFloat(precioFinalTexto.replace("$", "").trim());
let precioCarritoARS = 0.0;
 

let datosJSON; //Objeto que contendra los datos del JSON que me traiga de la API

let preciosEnDolares = true; //Flag de control que me va a ayudar a saber si en el momento actual la pagina esta en dolares o en pesos

//------  SECCION TESTING  ---------------//

// botonDebugAPI.addEventListener("click",
//     () => {
//         alert(API_URL_COMPLETA);
//     }
// );

//------  FUN DE SECCION TESTING  ---------------//


// fetch(API_URL_COMPLETA)
//     .then((respuestaCompetaAPI) => respuestaCompetaAPI.json())
//     .then(
//         (respuestaEnOjeto) => {
//             datosJSON = respuestaEnOjeto;
//             console.log("datos: ", datosJSON);
//             console.log("");
//             console.log("1 dolar a ARS: ", datosJSON.rates.ARS);
//         })
//         .catch(
//             (error) => {
//                 console.log("Se produjo un error trayendo los datos:", error);
//             });


//-------  BOTONES  ----------------//

botonConversionHaciaPesos.addEventListener("click", 
    () => {

        fetch(API_URL_COMPLETA)
            .then((respuestaCompetaAPI) => respuestaCompetaAPI.json())
            .then(
                (respuestaEnOjeto) => {
                    datosJSON = respuestaEnOjeto;

                    if (preciosEnDolares) {

                        //---- SECCION PRODUCTOS DISPONIBLES -----------------------//

                        //AJEDREZ EN PESOS:
                        precioAjedrezCaja.innerText = "$ " + (precioAjedrezUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //ROMPECABEZAS EN PESOS:
                        precioRompecabezasCaja.innerText = "$ " + (precioRompecabezasUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //SPINNER EN PESOS:
                        precioSpinnerCaja.innerText = "$ " + (precioSpinnerUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //PISTA HOT WHEELS EN PESOS:
                        precioPistaCaja.innerText = "$ " + (precioPistaUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //MASTERBALL EN PESOS:
                        precioMasterballCaja.innerText = "$ " + (precioMasterballUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //PRECIO TORTUGAS:
                        precioTortugasCaja.innerText = "$ " + (precioTortugasUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //---- SECCION CARRITO -----------------------//

                        //Precio Ajedrez:
                        ajedrezPrecioEnCarritoCaja.innerText = "$ " + (precioAjedrezUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //Precio Rompecabezas:
                        rompecabezasPrecioEnCarritoCaja.innerText = "$ " + (precioRompecabezasUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //Precio Spinner:
                        spinnerPrecioEnCarritoCaja.innerText = "$ " + (precioSpinnerUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //Precio Pista:
                        pistaPrecioEnCarritoCaja.innerText = "$ " + (precioPistaUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //Precio Masterball:
                        masterballPrecioEnCarritoCaja.innerText = "$ " + (precioMasterballUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //Precio Tortugas:
                        tortugasPrecioEnCarritoCaja.innerText = "$ " + (precioTortugasUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);

                        //Precio total del carrito de compras:
                        /*
                        precioFinalTexto = precioFinalCaja.innerText;
                        precioCarritoUSD = parseFloat(precioFinalTexto.replace("$", "").trim());

                        Vuelvo a capturar el valor porque el precio final es dinamico y esta constantemente cambiando. Por lo tanto, tengo que asegurarme de capturar el ultimo valor registrado.

                        precioFinalCaja.innerText = "$ " + (precioCarritoUSD * parseFloat(datosJSON.rates.ARS)).toFixed(2);
                        */

                        preciosEnDolares = false;
                        
                    }

                })
                .catch(
                    (error) => {
                        console.log("Se produjo un error trayendo los datos:", error);
                    });

    }
);


botonConversionHaciaDolares.addEventListener("click", 
    () => {

        if (!preciosEnDolares) {

            precioAjedrezCaja.innerText = precioAjedrezTexto;
            precioRompecabezasCaja.innerText = precioRompecabezasTexto;
            precioSpinnerCaja.innerText = precioSpinnerTexto;
            precioPistaCaja.innerText = precioPistaTexto;
            precioMasterballCaja.innerText = precioMasterballTexto;
            precioTortugasCaja.innerText = precioTortugasTexto;

            ajedrezPrecioEnCarritoCaja.innerText = ajedrezPrecioEnCarritoTexto;
            rompecabezasPrecioEnCarritoCaja.innerText = rompecabezasPrecioEnCarritoTexto;
            spinnerPrecioEnCarritoCaja.innerText = spinnerPrecioEnCarritoTexto;
            pistaPrecioEnCarritoCaja.innerText = pistaPrecioEnCarritoTexto;
            masterballPrecioEnCarritoCaja.innerText = masterballPrecioEnCarritoTexto;
            tortugasPrecioEnCarritoCaja.innerText = tortugasPrecioEnCarritoTexto;

            /*
            precioFinalTexto = precioFinalCaja.innerText;
            precioCarritoARS = parseFloat(precioFinalTexto.replace("$", "").trim());

            Vuelvo a capturar el valor porque el precio final es dinamico y esta constantemente cambiando. Por lo tanto, tengo que asegurarme de capturar el ultimo valor registrado.
            */

            /*
            console.log("precio final: ", (precioCarritoARS / parseFloat(datosJSON.rates.ARS)).toFixed(2));

            precioFinalCaja.innerText = "$ " + (precioCarritoARS / parseFloat(datosJSON.rates.ARS)).toFixed(2);

            preciosEnDolares = true;
            */
            preciosEnDolares = true;
            
        }

    }
);
