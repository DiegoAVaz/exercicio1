let velocity = 0
let nave = prompt("Bem-vindo a bordo! Digite o nome da nave:")
let perg = 'S'

//função de  acelerar
function velocityPlus(){
    velocity += 5
    return alert(velocity)
}

//função de desacelerar
function velocityDowngrade(){
    if(velocity == 0){
        return alert("A nave já está parada")
    } else {
     velocity -= 5
    }
    return alert(velocity)
}

//função de imprimir dados
function dadosDeBordo(){
    return alert("O nome da nave é "+nave+" e a velocidade atual é "+velocity)
}

while (perg == 'S') {

    let menu = parseInt(prompt("1-Acelerar a nave em 5km \n 2-Desacelerar a nave em 5km \n 3 - Imprimir resultado 4- Sair \n"))

    if (menu == 1) {
        velocityPlus()
    } else if (menu == 2){
        velocityDowngrade()
    } else if (menu == 3) {
        dadosDeBordo()
    } else if (menu == 4){
        break
    } else {
        alert('Opção inválida')
    }


    let perg2 = prompt('Deseja modificar algo (digite S para "sim" ou N para "não")?').toUpperCase()
    
    if (perg2 != 'S'){
        break
    }
}
