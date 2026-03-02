const display = document.getElementById("display");
const botoes = document.querySelectorAll("button[data-valor]");

function atualizarVisor(valor) {
    display.value = valor;
}

function calcularExpressao() {
    if (!display.value) {
        return;
    }

    const expressao = display.value.replace(/%/g, "/100");

    try {
        const resultado = Function(`"use strict"; return (${expressao})`)();

        if (!Number.isFinite(resultado)) {
            atualizarVisor("Erro");
            return;
        }

        atualizarVisor(String(resultado));
    } catch (erro) {
        atualizarVisor("Erro");
    }
}

function tratarEntrada(valor) {
    if (valor === "C") {
        atualizarVisor("");
        return;
    }

    if (valor === "DEL") {
        atualizarVisor(display.value.slice(0, -1));
        return;
    }

    if (valor === "=") {
        calcularExpressao();
        return;
    }

    if (display.value === "Erro") {
        atualizarVisor("");
    }

    atualizarVisor(display.value + valor);
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        tratarEntrada(botao.dataset.valor);
    });
});

document.addEventListener("keydown", (evento) => {
    const tecla = evento.key;

    if (/\d/.test(tecla) || ["+", "-", "*", "/", ".", "(", ")"].includes(tecla)) {
        tratarEntrada(tecla);
    } else if (tecla === "Enter") {
        evento.preventDefault();
        tratarEntrada("=");
    } else if (tecla === "Backspace") {
        tratarEntrada("DEL");
    } else if (tecla === "Escape") {
        tratarEntrada("C");
    } else if (tecla === "%") {
        tratarEntrada("%");
    }
});
