const encryptItem = document.querySelector("#encrypt");

const decryptItem = document.querySelector("#decrypt");

const editText = document.querySelector(".editText");

const clipBoard = document.querySelector(".clipBoard");

const showText = document.querySelector(".showText");

const resultText = document.querySelector("#resultText");

const img = document.querySelector(".img");

const encodedEmpty = document.querySelector(".encodedEmpty");

const sideText = document.querySelector(".sideText");

const firstSection = document.querySelector("#section1");
const secondSection = document.querySelector("#section2");

function encryptText() {
    // chageDisplay();
    const encryptText = editText.value;
    const splitText = encryptText.split("");
    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i] == "a") {
            splitText[i] = "ai"
        } else if (splitText[i] == "e") {
            splitText[i] = "enter"
        } else if (splitText[i] == "o") {
            splitText[i] = "ober"
        } else if (splitText[i] == "u") {
            splitText[i] = "ufat"
        }
    }
    const newText = splitText.join("");
    chageDisplay(newText);
}

function decryptText() {
    const encryptedText = editText.value;
    let decryptedText = "";
    decryptedText = encryptedText
        .replace(/"ai"/g, "a")
        .replace(/"ufat"/g, "u")
        .replace(/"imes"/g, "i")
        .replace(/"ober"/g, "o")
        .replace(/"enter"/g, "e");

    chageDisplay(decryptedText);
}

function chageDisplay(text) {
    encodedEmpty.style.display = "none";
    img.style.display = "none";
    showText.classList.add("show");
    resultText.value = text
    // if(resultText.value){
    //     resultText.style.lineHeight = "1"
    //     firstSection.style.height = "50%"
    //     secondSection.style.height = "50%"
    //     showText.style.height = "100%"
    // }
}

function clipBoardArea() {
    resultText.select();
    document.execCommand("copy");
    resultText.value = "";
    alert("Copiado com sucesso!");
}


encryptItem.addEventListener("click", encryptText);

decryptItem.addEventListener("click", decryptText);

clipBoard.addEventListener("click", clipBoardArea);