const buttons = document.querySelectorAll(".btn-agregar");
const listaCarrito = document.getElementById("#lista-carrito");
const badge = document.getElementById("#badge");
const total = document.getElementById("#total");


let cantidadItems = 0;
let totalCarrito = 0;

buttons.forEach( button => {
    button.addEventListener("click", () =>{
        const nombre = button.dataset.nombre;
        const precio = button.dataset.precio;

        agregarAlCarrito(nombre, precio);
    })
});

function agregarAlCarrito(nombre, precio){
    let li = document.createElement("li");

    li.innerHTML = `
        ${nombre} - ${precio}
        <button class="btn-eliminar">❌</button>

    `
    listaCarrito.appendChild(li);

    cantidadItems++
    updateBadge();
    updateTotal();

    const btnEliminar = li.querySelector("btn-eliminar");
    btnEliminar.addEventListener("click", ()=>{
        eliminarItem(li,precio);
    });
}

function updateBadge(){
    badge.textContent = cantidadItems;
}

function eliminarItem(li, precio){
    li.remove();

    cantidadItems--;
    totalCarrito -= precio;

    updateBadge();
    updateTotal();

}

function updateTotal (){
    total.textContent = "$" + totalCarrito.toLocaleString("es-CO", {minimumFractionDigits: 2});   //para formato regional y pesos
}

