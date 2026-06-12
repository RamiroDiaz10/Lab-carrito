const buttons = document.querySelectorAll(".btn-agregar");
const listaCarrito = document.getElementById("lista-carrito");
const badge = document.getElementById("badge");
const total = document.getElementById("total");
const btnVaciar = document.getElementById("btn-vaciar");
const msgVacio = document.getElementById("msg-vacio");


let cantidadItems = 0;
let totalCarrito = 0;

btnVaciar.addEventListener("click", () =>{
    listaCarrito.querySelectorAll("li").forEach(li=>{li.remove()});

    cantidadItems = 0;
    totalCarrito = 0;

    updateBadge();
    updateTotal();

     msgVacio.style.display = "block";
});

buttons.forEach( button => {
    button.addEventListener("click", () =>{
        const nombre = button.dataset.nombre;
        const precio = Number(button.dataset.precio);

        agregarAlCarrito(nombre, precio);
    })
});

function agregarAlCarrito(nombre, precio){
    precio = Number(precio);

    msgVacio.style.display = "none";

    let li = document.createElement("li");

    li.innerHTML = `
        ${nombre} - ${precio}
        <button class="btn-eliminar">❌</button>

    `
    listaCarrito.appendChild(li);

    cantidadItems++
    totalCarrito += precio;

    updateBadge();
    updateTotal();

    const btnEliminar = li.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", ()=> {
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


