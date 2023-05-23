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

const btnTheme = document.querySelector("#btn-theme");

function encryptText() {
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
}

function clipBoardArea() {
    const copyText = document.querySelector("#resultText");
    copyText.select();
    document.execCommand("copy");
    copyText.value = "";
    // console.log(copyText);
    alert("Texto copiado com sucesso!");

}

function handleTheme() {
    const globalPrimaryColor = "#0A3871";

    const lightModeColor = "#fff";

    const blackModeColor = "#000";

    const editTextPlaceHolder = document.querySelector(".editText");

    const divTheme = document.querySelector("#changeTheme");

    const header = document.querySelector(".logo");

    const lightIcon = document.querySelector("#changeTheme i");

    const principalContainer = document.querySelector(".principalContainer");

    const body = document.querySelector("body");

    const section2Span = document.querySelector("#section2 .sideText .encodedEmpty span");

    const section2Paragraph = document.querySelector("#section2 .sideText .encodedEmpty p");

    const exclamationWarning = document.querySelector(".textMessage p");

    const footerSignature = document.querySelector("footer h3");

    if (divTheme.classList.contains("day")) {

        divTheme.setAttribute("class", "night");

        lightIcon.setAttribute("class", "fas fa-cloud-moon");

        header.style.background = "#78a9f4";

        body.style.background = "#4e4f50";

        principalContainer.style.background = "#4e4f50";

        editTextPlaceHolder.style.color = lightModeColor;

        section2Span.style.color = lightModeColor;

        section2Paragraph.style.color = lightModeColor;

        encryptItem.style.background = "#78a9f4";

        exclamationWarning.style.color = lightModeColor;

        footerSignature.style.color = lightModeColor;

    } else {

        divTheme.setAttribute("class", "day");

        lightIcon.setAttribute("class", "fas fa-cloud-sun");

        header.style.background = globalPrimaryColor;

        body.style.background = "none";

        principalContainer.style.background = "none";

        section2Span.style.color = blackModeColor;

        section2Paragraph.style.color = blackModeColor;

        encryptItem.style.background = "#0A3871";

        exclamationWarning.style.color = blackModeColor;

        footerSignature.style.color = blackModeColor;
    }
}

encryptItem.addEventListener("click", encryptText);

decryptItem.addEventListener("click", decryptText);

clipBoard.addEventListener("click", clipBoardArea);

btnTheme.addEventListener("click", handleTheme);