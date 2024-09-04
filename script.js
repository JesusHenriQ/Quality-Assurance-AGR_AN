document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        document.getElementById('successMessage').textContent = "Cadastro realizado com sucesso!";
        document.getElementById('signupForm').reset();
    } else {
        document.getElementById('successMessage').textContent = "Por favor, preencha todos os campos.";
    }
});
