//Exercise 01

//Exercise 05

function checkCheckboxes() {
  var checkboxes = document.querySelectorAll('#form5 input[type="checkbox"]');
  var checkedCount = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCount++;
    }
  }
  document.getElementById('myButton').disabled = (checkedCount < 2);
}

//Exercise 09

function validateForm() {
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmarSenha').value;
  if (login && senha && confirmarSenha && senha === confirmarSenha) {
    return true;
  } else {
      alert('Por favor, verifique suas entradas.');
    return false;
  }
}

//Exercise 10

function togglePessoa(isFisica) {
  document.getElementById('cpf').disabled = !isFisica;
  document.getElementById('cnpj').disabled = isFisica;
  document.getElementById('nascimento').disabled = !isFisica;
}




