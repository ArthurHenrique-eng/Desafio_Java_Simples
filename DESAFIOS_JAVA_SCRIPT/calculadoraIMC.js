function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    }
    if (imc < 25) {
        return "Peso normal";
    }
    if (imc < 30) {
        return "Sobrepeso";
    }
    if (imc < 35) {
        return "Obesidade grau I";
    }
    if (imc < 40) {
        return "Obesidade grau II";
    }
    return "Obesidade grau III";
}

document.getElementById("calcular").addEventListener("click", () => {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.textContent = "Informe valores válidos de peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);
    resultado.textContent = `IMC: ${imc.toFixed(2)} - ${classificarIMC(imc)}`;
});
