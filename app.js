var btntranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");




console.log(txtInput)

function clickHandler() {
    console.log("clicked!");
    console.log("input", txtInput.value);
   outputDiv.innerText = "ajsjsjsjsjsjsj  " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)


 


