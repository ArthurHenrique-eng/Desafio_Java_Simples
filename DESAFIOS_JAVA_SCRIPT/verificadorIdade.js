document.getElementById("calcularIdade").addEventListener("click", () => {
    const nascimento = document.getElementById("nascimento").value;
    const resultado = document.getElementById("resultado");

    if (!nascimento) {
        resultado.textContent = "Escolha uma data válida.";
        return;
    }

    const dataNasc = new Date(`${nascimento}T00:00:00`);
    const hoje = new Date();

    if (dataNasc > hoje) {
        resultado.textContent = "A data de nascimento não pode estar no futuro.";
        return;
    }

    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNasc = dataNasc.getMonth();
    const diaNasc = dataNasc.getDate();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade -= 1;
    }

    resultado.textContent = `Você tem ${idade} ano(s).`;
});
