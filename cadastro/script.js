function updateFileName(input) {
  const label = input.parentElement;
  const fileName = input.files[0].name;
  const buttonText = label.querySelector(".inputbutton");
  buttonText.textContent = fileName;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cpf").addEventListener("input", function (e) {
    var value = e.target.value;
    var cpfPattern = value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    e.target.value = cpfPattern;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("numero").addEventListener("input", function (e) {
    var value = e.target.value;
    var cpfPattern = value
      .replace(/\D/g, "")
      .replace(/(\d{0})(\d)/, "$1($2")
      .replace(/(\d{2})(\d)/, "$1)$2")
      .replace(/(\d{9})\d+?$/, "$1");
    e.target.value = cpfPattern;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var senhaInput = document.getElementById("senha");
  var olho = document.getElementById("olho");
  olho.addEventListener("click", function () {
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
    } else {
      senhaInput.type = "password";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;
    var numero = document.getElementById("numero").value;
    var endereco = document.getElementById("endereco").value;
    var cidade = document.getElementById("cidade").value;
    var identidade = document.getElementById("identidade").value;
    var declaracao = document.getElementById("declaracao").value;

    if (
      nome !== "" &&
      email !== "" &&
      cpf !== "" &&
      senha !== "" &&
      numero !== "" &&
      endereco !== "" &&
      cidade !== "" &&
      identidade !== "" &&
      declaracao !== ""
    ) {
      var formData = {
        nome: nome,
        email: email,
        cpf: cpf,
        senha: senha,
        numero: numero,
        endereco: endereco,
        cidade: cidade,
        identidade: identidade,
        declaracao: declaracao,
      };

      var usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

      usuariosSalvos.push(formData);

      localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

      console.log("Usuário cadastrado:", formData);

      document.getElementById("form").reset();
      window.location.href = "../login.html";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
