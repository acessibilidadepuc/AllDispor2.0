function check(input) {
  if (input.value != document.getElementById('senha').value) {
    input.setCustomValidity('Senha não confere!');
  } else {
    // input is valid -- reset the error message
    input.setCustomValidity('');
  }
}

/*valida telefone
function ValidaTelefone(tel){
        exp = /\(\d{2}\)\ \d{4}\-\d{4}/
        if(!exp.test(tel.value))
                alert('Numero de Telefone Invalido!');
			}*/
