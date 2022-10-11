var inputsRange = [];
var allInputs = document.getElementsByTagName("input");

for(let i = 0; i < allInputs.length; i++){
    if(allInputs[i].type == "range"){
        inputsRange.push(allInputs[i]);
    }
}

function updateInputBg(element) {
    var max = element.getAttribute("max");
    var value = element.value;

    if(document.getElementById(`${element.id}_generated`)){
        document.getElementById(`${element.id}_generated`).remove();
    }

    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = `${element.id}_generated`;
    style.innerHTML = `.${element.id}_generated:before { width: ${String(Number((Number(element.value) / Number(element.getAttribute("max"))) * 100)) + "%"} !important; }`;
    document.getElementsByTagName('head')[0].appendChild(style);
    element.className = `${element.id}_generated`;
}

window.onload = function() {
    inputsRange.forEach(updateInputBg);
};