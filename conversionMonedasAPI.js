
const API_KEY = "fxr_live_59f64c76ce13f291988d755a8de4fd1fcfac";
const API_URL = "https://api.fxratesapi.com/latest?api_key=";
const API_URL_COMPLETA = API_URL + API_KEY;

const botonDebugAPI = document.getElementById("debug-api");


//------  SECCION TESTING  ---------------//

botonDebugAPI.addEventListener("click", 
    () => {
        alert(API_URL_COMPLETA);
    }
);

//------  FUN DE SECCION TESTING  ---------------//

let datosJSON; //Objeto que contendra los datos del JSON que me traiga de la API

fetch(API_URL_COMPLETA)
    .then((respuestaCompetaAPI) => respuestaCompetaAPI.json())
    .then(
        (respuestaEnOjeto) => {
            datosJSON = respuestaEnOjeto;
            console.log("datos: ", datosJSON);
            console.log("");
            console.log("1 dolar a ARS: ", datosJSON.rates.ARS);
        })
        .catch(
            (error) => {
                console.log("Se produjo un error trayendo los datos:", error);
            });