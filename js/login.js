document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Correo inválido.');
      return;
    }

    alert(`Bienvenido, ${email}!`);
    window.location.href = 'productos.html';
  });