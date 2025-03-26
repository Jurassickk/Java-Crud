document.getElementById('menu-toggle').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

function buscarProducto() {
    const productId = document.getElementById('product-id').value;
    const result = document.getElementById('search-result');
    if (productId) {
        result.innerHTML = `<p>Buscando producto con ID: <strong>${productId}</strong>...</p>`;
        setTimeout(() => {
            result.innerHTML = `<p>Producto encontrado: Juego de ejemplo con ID ${productId}</p>`;
        }, 1000);
    } else {
        result.innerHTML = `<p style="color:red;">Por favor ingrese un ID válido.</p>`;
    }
}

function crearProducto() {
    alert('Producto creado (simulado)');
}

function actualizarProducto() {
    alert('Producto actualizado (simulado)');
}

function eliminarProducto() {
    alert('Producto eliminado (simulado)');
}
