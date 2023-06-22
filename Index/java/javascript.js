function multiplicarMatriz() {
    // Obter os valores dos inputs 
    const linhas = parseInt(document.getElementById("linhas").value);
    const colunas = parseInt(document.getElementById("colunas").value);
    const numeroMultiplicar = Number(document.getElementById("inputNumero").value);
  
    // Inicializar a matriz vazia
    const matriz = [];
  
    // Preencher a matriz com os elementos informados pelo usuário
    for (let i = 0; i < linhas; i++) {
      const linha = [];
      for (let j = 0; j < colunas; j++) {
        const elemento = Number(prompt("Digite o elemento [" + i + "][" + j + "]:"));
        linha.push(elemento);
      }
      matriz.push(linha);
    }
  
    // Obter a referência para a div de entrada e limpar o conteúdo anterior
    const entrada = document.getElementById("originalMatrix");
    entrada.innerHTML = "";
  
    // Obter a referência para a div de saída e limpar o conteúdo anterior
    const saida = document.getElementById("result");
    saida.innerHTML = "";
  
    // Percorrer as linhas da matriz inicial e exibir cada linha em uma div separada
    for (let i = 0; i < matriz.length; i++) {
      const linhaInicial = matriz[i];
      const divLinhaInicial = document.createElement("div");
      divLinhaInicial.textContent = `${linhaInicial.join(" ")}`;
      entrada.appendChild(divLinhaInicial);
    }
  
    // Multiplicar a matriz pelo número informado
    const resultado = multiplicarMatrizPorNumero(matriz, numeroMultiplicar);
  
    // Percorrer as linhas da matriz resultante e exibir cada linha em uma div separada
    for (let i = 0; i < resultado.length; i++) {
      const linha = resultado[i];
      const divLinha = document.createElement("div");
      divLinha.textContent = `${linha.join(" ")}`;
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
  