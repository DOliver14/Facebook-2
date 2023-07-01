function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      alert("Por favor, preencha todos os campos.");
    } else if (username == "usuario" && password == "senha") {
      alert("Login bem-sucedido!");
    } else {
      alert("Nome de usuário ou senha incorretos.");
    }
  }