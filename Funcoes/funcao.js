
/*
// Criar função
function notificacao(msg){
    let teste = alert(msg)
    return teste
}

// Chamando a função
notificacao("Olá")
*/

// =====================================================================================================

/*
// Criando uma função que converte centímetros para metros usando arrow function
let conv = (x) => x / 100
alert(conv(parseFloat(prompt('Digite o valor em centímetros para converter para metros: '))))
*/

// =====================================================================================================

/*
let maior = (x, y) => {
    if (x > y){
        alert(`${x} é maior que ${y}`)
    } else if (x == y) {
        alert('Ambos são iguais')
    } else {
        alert(`${y} é maior que ${x}`)
    }

}

maior(prompt('Digite o primeiro número: '), prompt('Digite o segundo número: '))
*/

// =====================================================================================================

/*
function nMaior(x, y) {
    if (x > y){
        alert(`${x} é maior que ${y}`)
    } else if (x == y) {
        alert('Ambos são iguais')
    } else {
        alert(`${y} é maior que ${x}`)
    }
}

nMaior(prompt('Digite o primeiro número: '), prompt('Digite o segundo número: '))
*/

// =====================================================================================================

var convTemp = (x) => alert(((x - 32) / 1.8).toFixed(2))
convTemp(parseInt(prompt('Digite a temperatura em F°: ')))