function calcular() {
    var meudin = parseFloat(document.getElementById("cxdinheiro").value);
    var moedaselecionada = document.getElementById("cxmoedas").value;
    var reis = 0.05;
    var libra = 0.06;
    var dolar = 0.03;

    if (moedaselecionada == "real" && meudin >= 0) {
        var result = meudin * reis;
        document.getElementById("cxresult").innerHTML = meudin + " reais de hoje valeriam " + result.toFixed(2) + " réis em 1833."
    }
    else if (moedaselecionada == "dolar" && meudin >= 0) {
        var result = meudin * dolar;
        document.getElementById("cxresult").innerHTML = meudin + " dolares de hoje valeriam " + result.toFixed(2) + " dolares em 1794."
    }
    else if (moedaselecionada == "libra" && meudin >= 0) {
        var result = meudin * libra;
        document.getElementById("cxresult").innerHTML = meudin + " libras de hoje valeriam " + result.toFixed(2) + " libras em 1971."
    }
    else {
        alert("Por favor, preencha todos os campos")
    }
}



