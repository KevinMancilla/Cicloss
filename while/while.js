var btnUno = document.querySelector("#btnUno")
var btnDos = document.querySelector("#btnDos")
var btnTres = document.querySelector("#btnTres")

// B O T O N  T R E S 
btnTres.addEventListener("click", () => {
    let miLista = document.querySelector("#miLista") 
    let x = Number(document.querySelector("#numero1").value)

    let i = 0
    while(i < x) {
    let num = prompt("Ingresa un numero:")
    let nvoElemento = document.createElement("li")

    nvoElemento.textContent = num
    miLista.appendChild(nvoElemento)

        i++
    }
})

// B O T O N  D O S
btnDos.addEventListener("click", () =>{
    let miSelect = document.querySelector("#miSelect")
    let i = 0

    while( i < 10) {
        // crea nuevo elemento HTML tipo Opcion
        let nvaOpcion = document.createElement("option")

        //Asigna el valor y texto de ese nuevo elemento
        nvaOpcion.value = i
        nvaOpcion.text = i

        // Agrega el nuevo elemento al select
        miSelect.add(nvaOpcion)
        console.log(i)

        //Incrementa la varibale de control del ciclo
        i++
    }
})

// B O T O N   U N O
btnUno.addEventListener("click", () => {
let select = document.querySelector("#miSelect")
let i = 0;

while (i < 10) {

    console.log(i)
    i++
}
})
