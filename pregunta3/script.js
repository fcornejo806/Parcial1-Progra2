function myCreateFunction() {
    var table = document.getElementById("Vasos");
    var row = table.insertRow(0);
    var fecha = row.insertCell(0);
    var bebida = row.insertCell(1);
    var cantidad = row.insertCell(2);
    var mensaje = row.insertCell(3);
    fecha.innerHTML = "fecha";
    bebida.innerHTML = "bebida";
    cantidad.innerHTML = "cantidad";
    mensaje.innerHTML = "mensaje";
    function myDeleteFunction() {
        document.getElementById("Vasos").deleteRow(0);
}
}
    