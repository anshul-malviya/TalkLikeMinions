var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#inputBox");
var outputDiv = document.querySelector("#outputBox");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURl(text) {
    return serverURL + "?" + "text=" + text;
}

function errorFounder(error) {
    console.log("error occured", error);
    alert("something went wrong with server! try again later")
}


function clickHandler() {

    var inputText = txtInput.value;

    fetch(getTranslationURl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorFounder)
};


btnTranslate.addEventListener("click", clickHandler);