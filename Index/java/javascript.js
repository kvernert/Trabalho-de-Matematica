function multiplicarMatriz() {
    var rows = parseInt(document.getElementById("rows-input").value);
    var cols = parseInt(document.getElementById("cols-input").value);
    var number = parseFloat(document.getElementById("number-input").value);

    var matriz = [];

    for (var i = 0; i < rows; i++) {
        var linha = [];
        for (var j = 0; j < cols; j++) {
            var elemento = parseFloat(prompt("Digite o elemento [" + i + "][" + j + "]:"));
            linha.push(elemento);
        }
        matriz.push(linha);
    }

    var resultado = multiplicarMatrizPorNumero(matriz, number);

    var output = document.getElementById("result");
    output.innerHTML = "";

    for (var i = 0; i < resultado.length; i++) {
        var linha = resultado[i];
        var linhaHTML = document.createElement("div");
        linhaHTML.textContent = linha.join(" ");
        output.appendChild(linhaHTML);
    }
}

function multiplicarMatrizPorNumero(matriz, numero) {
    var resultado = [];

    for (var i = 0; i < matriz.length; i++) {
        var linha = matriz[i];
        var novaLinha = [];
        for (var j = 0; j < linha.length; j++) {
            var novoElemento = linha[j] * numero;
            novaLinha.push(novoElemento);
        }
        resultado.push(novaLinha);
    }

    return resultado;
}
