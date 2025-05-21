const API = 'https://api.escuelajs.co/api/v1';

fetch(`${API}/products`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('products');
        data.slice(0, 10).forEach(product => {
            container.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
              <img src="${product.images[0]}" class="card-img-top" height="200">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">$${product.price}</p>
                <button class="btn btn-primary" onclick="showDetail(${product.id})">Ver detalle</button>
              </div>
            </div>`;
        });
    });

function showDetail(id) {
    fetch(`https://fakeapi.platzi.com/api/v1products/${id}`)
        .then(res => res.json())
        .then(product => {
            document.getElementById('modalTitle').innerText = product.title;
            document.getElementById('modalBody').innerHTML = `
            <img src="${product.images[0]}" class="img-fluid mb-2">
            <p>${product.description}</p>
            <p><strong>Precio:</strong> $${product.price}</p>`;
            new bootstrap.Modal(document.getElementById('productModal')).show();
        });
}