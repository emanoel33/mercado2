// Simulação de login (sem backend real)
const validUsername = "admin";
const validPassword = "12345";

// Função de validação do login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').admin;
    const password = document.getElementById('password').12345;
    const loginMessage = document.getElementById('loginMessage');

    if (username === validUsername && password === validPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "index.html"; // Redireciona para a página inicial
    } else {
        loginMessage.style.display = 'block'; // Exibe mensagem de erro
    }
});







// Função que deleta um produto baseado no id do elemento
function deletarProduto(idProduto) {
    var produto = document.getElementById(idProduto);  // Seleciona o item da lista pelo id
    produto.remove();  // Remove o elemento da lista
}







// Função para adicionar um novo produto à lista
function adicionarProduto() {
    // Obtendo os valores dos inputs
    var nomeProduto = document.getElementById("nomeProduto").value;
    var precoProduto = document.getElementById("precoProduto").value;

    // Verificar se os campos não estão vazios
    if (nomeProduto === "" || precoProduto === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criando o item de lista para o produto
    var li = document.createElement("li");
    li.textContent = `${nomeProduto} - R$ ${precoProduto}`;

    // Criando o botão para deletar o produto
    var button = document.createElement("button");
    button.textContent = "Deletar";
    button.onclick = function() {
        li.remove(); // Remove o produto da lista
    };

    // Adicionando o botão ao item da lista
    li.appendChild(button);

    // Adicionando o item de lista à lista de produtos
    document.getElementById("produtos-lista").appendChild(li);

    // Limpando os campos de input
    document.getElementById("nomeProduto").value = "";
    document.getElementById("precoProduto").value = "";
}

// Função para adicionar um novo produto à lista
function adicionarProduto() {
    // Obtendo os valores dos inputs
    var nomeProduto = document.getElementById("nomeProduto").value;
    var precoProduto = document.getElementById("precoProduto").value;

    // Verificar se os campos não estão vazios
    if (nomeProduto === "" || precoProduto === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criando o item de lista para o produto
    var li = document.createElement("li");
    li.textContent = `${nomeProduto} - R$ ${precoProduto}`;

    // Criando o botão para deletar o produto
    var button = document.createElement("button");
    button.textContent = "Deletar";
    button.onclick = function() {
        li.remove(); // Remove o produto da lista
    };

    // Adicionando o botão ao item da lista
    li.appendChild(button);

    // Adicionando o item de lista à lista de produtos
    document.getElementById("produtos-lista").appendChild(li);

    // Limpando os campos de input
    document.getElementById("nomeProduto").value = "";
    document.getElementById("precoProduto").value = "";
}
