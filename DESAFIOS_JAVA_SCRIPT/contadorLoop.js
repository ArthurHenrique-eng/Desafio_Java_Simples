document.getElementById("contar").addEventListener("click", () => {
    const inicio = Number(document.getElementById("inicio").value);
    const fim = Number(document.getElementById("fim").value);
    const passo = Number(document.getElementById("passo").value);
    const resultado = document.getElementById("resultado");

    if (!Number.isFinite(inicio) || !Number.isFinite(fim) || !Number.isFinite(passo) || passo <= 0) {
        resultado.textContent = "Preencha início, fim e passo com valores válidos.";
        return;
    }

    let texto = "";

    if (inicio <= fim) {
        for (let i = inicio; i <= fim; i += passo) {
            texto += `${i} `;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            texto += `${i} `;
        }
    }

    resultado.textContent = texto.trim();
});
