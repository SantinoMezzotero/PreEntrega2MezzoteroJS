
/* 
Ingrese a la pagina con su nombre y apellido.
*/

let nombre = prompt("ingrese el nombre");
let apellido = prompt("ingrese el apellido");

if(nombre != "" && apellido != "" ){
alert(`su nombre es : ${nombre} ${apellido}`);
} else {
    alert("el nombre y el apellido se requieren");
}

function cambio(){
    let valores = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolarOficial = 347;
    let dolarBlue = 730;
    if(document.getElementById("uno").checked){
        resultado = valores / dolarOficial;
        alert("El cambio de valor con el peso y dolar oficial es:" + resultado.toFixed(3));
    } else if (document.getElementById("dos").checked){
        resultado = valores / dolarBlue;
        alert("El cambio de valor con el peso y dolar blue es:" + resultado.toFixed(3));
    } else {
        alert("Tenes que indicar el monto")
    }
}

    /* 
    calculadora
    */


    let pantalla = document.querySelector(".pantalla");
    let botones = document.querySelectorAll(".btn");
    
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            let botonApretado = boton.textContent;
    
            if(boton.id === "c") {
                pantalla.textContent = "0"
                return;
            }
    
            if (boton.id === "borrar") {
                if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                    pantalla.textContent = "0";
                } else {
                    pantalla.textContent = pantalla.textContent.slice(0, -1)
                }
                return;
            }
    
            if(boton.id === "igual") {
                try {
                    pantalla.textContent = eval(pantalla.textContent);
                } catch {
                    pantalla.textContent = "Error!";
                }
                return;
            }
            
    
            if(pantalla.textContent === "0" || pantalla.textContent === "Error!") {
                pantalla.textContent = botonApretado;
            } else {
                pantalla.textContent += botonApretado;
            }
        })
    })

/* 
compra
*/

let productos = [
    { nombre: "1 dolar", precio: 730},
    { nombre: "10 dolares", precio: 7300},
    { nombre: "100 dolares", precio: 73000},
    { nombre: "1000 dolares", precio: 730000},
    { nombre: "10000 dolares", precio: 7300000},
    { nombre: "100000 dolares", precio: 73000000},
];
let carrito = []

let seleccion = prompt("hola desea comprar dolares si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar los dolares si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias por visitarnos, hasta luego!")
}

while(seleccion != "no"){
    let producto = prompt("agrega la cantidad de dolares que necesitas")
    let precio = 0

    if(producto == "harina" || producto == ("1 dolar") || producto == ("10 dolares") || producto == ("100 dolares") || producto == ("1000 dolares") || producto == ("10000 dolares") || producto == ("100000 dolares") ){
        switch(producto) {
            case "1 dolar":
                precio = 730;
                break;
            case "10 dolares":
                precio = 7300
                break;
            case "10 dolares":
                precio = 7300
                break;
            case "100 dolares":
                precio = 73000
                break;
            case "1000 dolares":
                precio = 730000
                break;
            case "10000 dolares":
                precio = 7300000
                break;
            case "100000 dolares":
                precio = 73000000
                break; 
        }

    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

    carrito.push({producto, dinero, precios})
    console.log(carrito)
    } else {
        alert("no tenemos esa cantidad de primera")
    }

    seleccion = prompt("desea seguir comprando dolares?")
    
    while(seleccion === "no"){
        alert("gracias por comprarnos.")
    }

}
