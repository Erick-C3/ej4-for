const divContImg = document.querySelector("#contenedor-imagenes");
const inputCantImg = document.querySelector("#cant-img");

const IMG_1 = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg";
const IMG_2 = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg";
const IMG_3 = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg";

//modificar el algoritmo para que agregue 3 tipos de imagenes diferentes
// al menos para los primeros 3

function generar(){
    let cantImg = inputCantImg.value;
    divContImg.innerHTML = "";
    for (let i = 0; i < cantImg ; i++) {
        divContImg.innerHTML += `
            <img id="img-${  i+1  }" src="${IMG_1}" alt="img 1">
        `;
    }
}