const API = 'https://api.escuelajs.co/api/v1';

    fetch(`${API}/users`)
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('users');
        data.forEach(user => {
          container.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
              <img src="${user.avatar}" class="card-img-top" height="200">
              <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.email}</p>
                <button class="btn btn-primary" onclick="showUser(${user.id})">Ver detalle</button>
              </div>
            </div>`;
        });
      });

    function showUser(id) {
      fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
        .then(res => res.json())
        .then(user => {
          alert(`Viendo detalle del usuario: ${user.name}`);
          document.getElementById('modalTitle').innerText = user.name;
          document.getElementById('modalBody').innerHTML = `
            <img src="${user.avatar}" class="img-fluid mb-2">
            <p><strong>Correo:</strong> ${user.email}</p>
            <p><strong>Rol:</strong> ${user.role}</p>`;
          new bootstrap.Modal(document.getElementById('userModal')).show();
        });
    }