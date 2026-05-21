// CONTRASEÑA PARA VER SALDOS
const PASSWORD = "admin123";

// ARREGLO DE MOVIMIENTOS
let movimientos = [];

// SALDOS
let saldos = {
    Azteca: 0,
    Banamex: 0,
    Santander: 0,
    BBVA: 0,
    Inbursa: 0
};

// FORMULARIO
const form = document.getElementById("formMovimiento");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // OBTENER DATOS
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const tipo = document.getElementById("tipo").value;
    const banca = document.getElementById("banca").value;
    const fecha = document.getElementById("fecha").value;
    const descripcion = document.getElementById("descripcion").value;

    // CREAR MOVIMIENTO
    const movimiento = {
        cantidad,
        tipo,
        banca,
        fecha,
        descripcion
    };

    // GUARDAR
    movimientos.push(movimiento);

    // ACTUALIZAR SALDOS
    actualizarSaldo(movimiento);

    // MOSTRAR EN TABLA
    agregarTabla(movimiento);

    // LIMPIAR FORMULARIO
    form.reset();

});

// ACTUALIZAR SALDO
function actualizarSaldo(movimiento){

    if(movimiento.tipo === "Ingreso"){
        saldos[movimiento.banca] += movimiento.cantidad;
    }else{
        saldos[movimiento.banca] -= movimiento.cantidad;
    }

    mostrarSaldos();
}

// AGREGAR FILA A TABLA
function agregarTabla(movimiento){

    const tabla = document.getElementById("tablaMovimientos");

    const fila = `
        <tr>
            <td>$${movimiento.cantidad}</td>
            <td>${movimiento.tipo}</td>
            <td>${movimiento.banca}</td>
            <td>${movimiento.fecha}</td>
            <td>${movimiento.descripcion}</td>
        </tr>
    `;

    tabla.innerHTML += fila;
}

// MOSTRAR SALDOS
function mostrarSaldos(){

    document.getElementById("saldoAzteca").textContent = saldos.Azteca.toFixed(2);

    document.getElementById("saldoBanamex").textContent = saldos.Banamex.toFixed(2);

    document.getElementById("saldoSantander").textContent = saldos.Santander.toFixed(2);

    document.getElementById("saldoBBVA").textContent = saldos.BBVA.toFixed(2);

    document.getElementById("saldoInbursa").textContent = saldos.Inbursa.toFixed(2);
}

// VERIFICAR CONTRASEÑA
function verificarPassword(){

    const password = document.getElementById("password").value;

    if(password === PASSWORD){

        document.getElementById("contenedorSaldos").classList.remove("oculto");

    }else{

        alert("Contraseña incorrecta");

    }
}
