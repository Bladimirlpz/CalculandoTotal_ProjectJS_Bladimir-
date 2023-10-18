precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

var span = document.querySelector(".cantidad");
var total = Number(span.innerHTML);

function agregar () {
    total = total + 1;
    span.innerHTML = total;
    totalpagar = total * precio
    valortotal = document.querySelector(".valor-total").innerHTML = totalpagar
}

function quitar () {
    if(span.innerHTML > 0) {
        total = total - 1
    }
    span.innerHTML = total     
    totalpagar = total * precio
    valortotal = document.querySelector(".valor-total").innerHTML = totalpagar
}
