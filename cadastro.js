// Função para formatar o CPF (XXX.XXX.XXX-XX)
document.getElementById('cpf').addEventListener('input', function(event) {
    let cpf = event.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        event.target.value = cpf;
    }
});

// Função para validar o formato do telefone celular (+55)
document.getElementById('telefone_celular').addEventListener('input', function(event) {
    let telefone = event.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (telefone.length > 11) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '+55 ($1) $2-$3');
        event.target.value = telefone;
    }
});

// Exibir o campo de telefone fixo caso o celular seja preenchido
document.getElementById("telefone_celular").addEventListener("input", function() {
    const telefoneCelular = this.value;
    const telefoneFixo = document.getElementById("telefone_fixo");

    if (telefoneCelular.length > 0) {
        telefoneFixo.style.display = "block"; // Exibe o campo de telefone fixo
    } else {
        telefoneFixo.style.display = "none"; // Oculta o campo de telefone fixo
    }
});

// Validação de senha (mínimo 8 caracteres alfabéticos)
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar_senha").value;
    const nome = document.getElementById("nome").value;
    const nomeMaterno = document.getElementById("nome_materno").value;

    // Verifica se o nome e nome materno não ultrapassam 60 caracteres
    if (nome.length > 60 || nomeMaterno.length > 60) {
        alert("Nome ou nome materno excedem o limite de 60 caracteres.");
        event.preventDefault();
        return false;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        event.preventDefault();
        return false;
    }

    // Verifica se a senha tem pelo menos 8 caracteres alfabéticos
    const senhaRegex = /^[a-zA-Z]{8,}$/;
    if (!senhaRegex.test(senha)) {
        alert("A senha deve conter pelo menos 8 caracteres alfabéticos.");
        event.preventDefault();
        return false;
    }

    // Se tudo estiver correto, avança para a página de login (simulação de redirecionamento)
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html"; // Redireciona para a página de login
});
