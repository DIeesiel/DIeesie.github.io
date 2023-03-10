const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === '' || password === '') {
    alert('Por favor, preencha todos os campos!');
  } else {

  }
});

document.getElementById("cadastro-btn").addEventListener("click", function() {
  window.location.href = "Cadastro.html";
});