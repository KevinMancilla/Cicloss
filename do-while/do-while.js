var btnUno = document.querySelector("#btnUno")
var btnDos = document.querySelector("#btnDos")
var btnTres = document.querySelector("#btnTres")

// B O T O N   T R E S 
btnTres.addEventListener("click", () => {
    let pares = 0
    let miLista = document.querySelector("#miLista")

    do{ 
        let num = Number(prompt("Escribe un numero:"))

        if (num < 0) {
            break;
        }

        if ( num%2 === 0){
        pares++

        let nuevo1 = document.createElement("li")
        nuevo1.textContent = num
        miLista.appendChild(nuevo1)
    }
    } while(pares < 5)
})



// B O T O N  D O S
btnDos.addEventListener("click", () =>{
    let miSelect = document.querySelector("#miSelect")
    let x = Number(document.querySelector("#numero1").value)
    let i = 0

    do{ 
        let num = prompt("Escribe un numero:")
        let nuevo = document.createElement("option")

        nuevo.value = num 
        nuevo.text = num

        miSelect.add(nuevo)
        i++
    } while(i < x)
})

// B O T O N    U N O 
btnUno.addEventListener("click", () => {
    let i = 0 

    do{
        alert (i)
        console.log(i)
        i++
    } while(i<10)
})
