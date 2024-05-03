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
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.getElementById("loginEmail").value;
      var senha = document.getElementById("loginSenha").value;

      var usuariosSalvos = JSON.parse(localStorage.getItem("usuarios"));

      var usuarioEncontrado = usuariosSalvos.find(function (usuario) {
        return usuario.email === email && usuario.senha === senha;
      });

      if (usuarioEncontrado) {
        alert("Login bem-sucedido!");
        window.location.href = "./telaInicial/homeScreen.html";
      } else {
        alert("Email ou senha incorretos. Por favor, tente novamente.");
      }
    });
});
