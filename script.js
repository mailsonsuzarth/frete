function analisarPedido() {

    const cliente = document.getElementById("cliente").value;
    const produto = document.getElementById("produto").value;
    const preco = Number(document.getElementById("preço").value);
    const quantidade = Number(document.getElementById("quantidade").value);
    const estoque = Number(document.getElementById("estoque").value);
    const cidadeInicial = document.getElementById("cidadeInicial").value;
    const cidadeFinal = document.getElementById("cidadeFinal").value;
    const distancia = Number(document.getElementById("distancia").value);
    const peso = Number(document.getElementById("peso").value);
    const metrosCubicos = Number(document.getElementById("metrosCubicos").value);
    const resultado = document.getElementById("resultado");

    if (
        !cliente ||
        !produto ||
        !cidadeInicial ||
        !cidadeFinal ||
        preco <= 0 ||
        quantidade <= 0 ||
        estoque < 0 ||
        distancia <= 0 ||
        peso <= 0 ||
        metrosCubicos <= 0
    ) {
        resultado.innerHTML = `
            <p style="color: red;">
                Preencha todos os campos corretamente.
            </p>
        `;
        return;
    }

    if (quantidade > estoque) {
        resultado.innerHTML = `
            <p style="color: red;">
                Pedido não aprovado: quantidade solicitada maior que o estoque disponível.
            </p>
            <p>Estoque disponível: ${estoque} unidade(s).</p>
        `;
        return;
    }

    const valorProdutos = preco * quantidade;

    const freteDistancia = distancia * 0.50;
    const fretePeso = peso * 0.10;
    const freteVolume = metrosCubicos * 20;

    const valorFrete = freteDistancia + fretePeso + freteVolume;
    const valorTotal = valorProdutos + valorFrete;

    resultado.innerHTML = `
        <h2>Orçamento</h2>

        <p><strong>Cliente:</strong> ${cliente}</p>

        <p><strong>Produto:</strong> ${produto}</p>

        <p><strong>Cidade inicial:</strong> ${cidadeInicial}</p>

        <p><strong>Cidade final:</strong> ${cidadeFinal}</p>

        <p><strong>Distância:</strong> ${distancia} km</p>

        <p><strong>Quantidade:</strong> ${quantidade} unidade(s)</p>

        <p><strong>Preço unitário:</strong> R$ ${preco.toFixed(2)}</p>

        <p><strong>Valor dos produtos:</strong> R$ ${valorProdutos.toFixed(2)}</p>

        <p><strong>Peso:</strong> ${peso} kg</p>

        <p><strong>Volume:</strong> ${metrosCubicos.toFixed(2)} m³</p>

        <p><strong>Valor do frete:</strong> R$ ${valorFrete.toFixed(2)}</p>

        <hr>

        <h3>Valor total: R$ ${valorTotal.toFixed(2)}</h3>

        <p style="color: green;">
            Pedido aprovado! O orçamento foi calculado com sucesso.
        </p>
    `;

    document.getElementById("agradecimento").style.display = "block";
}

function novoPedido() {

    
    document.getElementById("cliente").value = "";
    document.getElementById("produto").value = "";
    document.getElementById("preço").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("estoque").value = "";
    document.getElementById("cidadeInicial").value = "";
    document.getElementById("cidadeFinal").value = "";
    document.getElementById("distancia").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("metrosCubicos").value = "";

    document.getElementById("agradecimento").style.display = "none";

    document.getElementById("resultado").innerHTML = `
        Preencha os dados e clique em "Analisar pedido".
    `;

      document.getElementById("cliente").focus();
}