function multiplicarMatriz() {
    // Obter os valores dos inputs 
    const rows = parseInt(document.getElementById("rows-input").value);
    const cols = parseInt(document.getElementById("cols-input").value);
    const number = Number(document.getElementById("number-input").value);
  
    // Inicializar a matriz vazia
    const matriz = [];
  
    // Preencher a matriz com os elementos informados pelo usuário
    for (let i = 0; i < rows; i++) {
      const linha = [];
      for (let j = 0; j < cols; j++) {
        const elemento = Number(prompt("Digite o elemento [" + i + "][" + j + "]:"));
        linha.push(elemento);
      }
      matriz.push(linha);
    }
  
    // Obter a referência para a div de entrada e limpar o conteúdo anterior
    const entrada = document.getElementById("original-matrix");
    entrada.innerHTML = "";
  
    // Obter a referência para a div de saída e limpar o conteúdo anterior
    const saida = document.getElementById("result");
    saida.innerHTML = "";
  
    // Percorrer as linhas da matriz inicial e exibir cada linha em uma div separada
    for (let i = 0; i < matriz.length; i++) {
      const linhaInicial = matriz[i];
      const divLinhaInicial = document.createElement("div");
      divLinhaInicial.textContent = `[${linhaInicial.join(" ")}]`;
      entrada.appendChild(divLinhaInicial);
    }
  
    // Multiplicar a matriz pelo número informado
    const resultado = multiplicarMatrizPorNumero(matriz, number);
  
    // Percorrer as linhas da matriz resultante e exibir cada linha em uma div separada
    for (let i = 0; i < resultado.length; i++) {
      const linha = resultado[i];
      const divLinha = document.createElement("div");
      divLinha.textContent = `[${linha.join(" ")}]`;
      saida.appendChild(divLinha);
    }
  }
  
  function multiplicarMatrizPorNumero(matriz, numero) {
    // Inicializar a matriz resultante
    const resultado = [];
  
    // Percorrer as linhas da matriz
    for (let i = 0; i < matriz.length; i++) {
      let linha = matriz[i];
      let novaLinha = [];
  
      // Percorrer os elementos da linha e multiplicar pelo número informado
      for (let j = 0; j < linha.length; j++) {
        const novoElemento = linha[j] * numero;
        novaLinha.push(novoElemento);
      }
  
      // Adicionar a nova linha à matriz resultante
      resultado.push(novaLinha);
    }
  
    // Retornar a matriz resultante
    return resultado;
  }
  
  function handleKeyPress(event, nextInput) {
    // Verificar se a tecla pressionada é a tecla Enter
    if (event.keyCode === 13) {
      event.preventDefault();
  
      // Mover o foco para o próximo input
      nextInput.focus();
    }
  }
  