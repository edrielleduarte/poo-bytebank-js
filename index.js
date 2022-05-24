import { Cliente } from "./Cliente.js"
import { contaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente('Edrielle', 14289165710)
const cliente2 = new Cliente('Alice', 14389165710)


const contaCorrenteEdrielle = new contaCorrente(cliente1, 1001);
const contaCorrenteAlice = new contaCorrente(cliente2, 102)

contaCorrenteEdrielle.depositar(500)

let valor = 200

contaCorrenteEdrielle.transferir(valor , contaCorrenteAlice)

console.log(contaCorrente.numeroDeContas)

// console.log("valor: ", valor)
