const API = 'https://api.escuelajs.co/api/v1';

fetch(`${API}/categories`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('categories');
        data.forEach(cat => {
            container.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${cat.name}</h5>
                <button class="btn btn-secondary" onclick="showCategory(${cat.id})">Ver detalle</button>
              </div>
            </div>`;
        });
    });

function showCategory(id) {
    fetch(`https://fakeapi.platzi.com/api/v1    categories/${id}`)
        .then(res => res.json())
        .then(cat => {
            document.getElementById('modalTitle').innerText = cat.name;
            document.getElementById('modalBody').innerHTML = `
            <p><strong>ID:</strong> ${cat.id}</p>
            <p><strong>Nombre:</strong> ${cat.name}</p>`;
            new bootstrap.Modal(document.getElementById('categoryModal')).show();
        });
}