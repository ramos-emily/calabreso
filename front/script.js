const formulario = document.querySelector("form");
const nome = document.querySelector("forms_name");
const email = document.querySelector("forms_email");
const senha = document.querySelector("forms_senha");


formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(nome.value)
})