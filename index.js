var inputsRange = []; //Apenas os inputs do tipo range
var allInputs = document.getElementsByTagName("input"); //todos os inputs da página


//Filtra os input[type=range]
for(let i = 0; i < allInputs.length; i++){
    if(allInputs[i].type == "range"){
        inputsRange.push(allInputs[i]); 
    }
}

//function que atualiza o background de cada input
function updateInputBg(element) {
    var max = element.getAttribute("max"); //Valor máximo do input
    var value = element.value; //Valor atual selecionado

    //Se o estilo já existir, remove
    if(document.getElementById(`${element.id}_generated`)){
        document.getElementById(`${element.id}_generated`).remove(); 
    }

    //cria um style na head com uma classe com o nome do id do element (nome único)
    //e adiciona o width do background do input nela.
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = `${element.id}_generated`;
    //calculo da porcentagem que o background deve ter (Atual / Total * 100)
    style.innerHTML = `.${element.id}_generated:before { width: ${String(Number((Number(element.value) / Number(element.getAttribute("max"))) * 100)) + "%"} !important; }`;

    //adiciona o estilo na head do HTML
    document.getElementsByTagName('head')[0].appendChild(style);
    element.className = `${element.id}_generated`;
}

//executa a função para cada input[type=range] da página quando ela carregar
//(Garante que o background vai estar correto quando carregar a página)
window.onload = function() {
    inputsRange.forEach(updateInputBg);
};
