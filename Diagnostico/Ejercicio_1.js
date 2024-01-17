let val = prompt("Ingrese un valor",0);
val = parseInt(val);
console.log(val); // 0
// let res = val++;
let res = val + 1; 
console.log(res); // 0

Processo();

async function Processo() {
    console.log("Inicio del proceso");
    await matriculas();
    await contador1();
}

 function matriculas() {
    const matricula = async () => {
        const matricula = await fetch('https://api.generadordni.es/v2/vehicle/platenumber?results=10')
        const data = await matricula.json()
        console.log(data)
    }
    
    matricula();
}

function contador1() {
    const contador = async () => {
        // Version: 1.0
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
          console.log(i);
          if (i > 8) {
            console.log("Mensaje de error");
          }
        }, 800);
      }
    }
    
    contador();
    console.log("Fin del proceso");  
}
