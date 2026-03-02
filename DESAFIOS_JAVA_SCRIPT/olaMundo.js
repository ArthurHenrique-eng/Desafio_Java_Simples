document.getElementById("texto").innerText = "Olá Mundo! Eu sou Arthur Barbosa.";

function mostrarMensagem() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let senha = document.getElementById("senha").value;

    if(nome === "" || sobrenome === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Olá Mundo! Eu sou " + nome + " " + sobrenome);
}

document.getElementById("btnEntrar").addEventListener("click", function() {
    
    let nome = document.getElementById("nome").value.trim();

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    // Salva corretamente no localStorage
    localStorage.setItem("nomeUsuario", nome);

    // Redireciona
    window.location.href = "calculadoraSimples.html";
});




function calculadoraSimples(){
        window.location.href = "calculadoraSimples.html"; 

}