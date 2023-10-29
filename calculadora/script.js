"use strict";

const display = document.querySelector(".display");
const teclas_numericas = [...document.querySelectorAll(".teclas.numeros")];
const teclas_operadores = [...document.querySelectorAll(".teclas.operador")];
const teclas_parenteses = [...document.querySelectorAll(".parentese_tecla")];
const tecla_result = document.querySelector(".teclas.resultado-button");
const tecla_ac = document.querySelector(".teclas.limpa");
const tecla_maisOuMenos = document.querySelector(".teclas.mais_ou_menos");
const tecla_del = document.querySelector(".teclas.deletar");

const verifica_operacao = (Operação) => {

}
teclas_numericas.map((tecla) => {
    tecla.addEventListener("click", () => {
        if(display.innerHTML == 0){
            display.innerHTML = tecla.innerHTML
        }else{
            display.innerHTML += tecla.innerHTML
        }
        
    })
})
teclas_operadores.map((tecla) => {
    tecla.addEventListener("click", () => {
            display.innerHTML += tecla.innerHTML
    })
})
teclas_parenteses.forEach((tecla) => {
    tecla.addEventListener("click", () => {
            if(display.innerHTML == 0){
                display.innerHTML = tecla.innerHTML;
            }else{
                display.innerHTML += tecla.innerHTML;
            }
    })
})
tecla_result.addEventListener("click", () => {
    try{
        const resultado = eval(display.innerHTML);
        display.innerHTML = resultado;
    }catch(e){
        const resultado_anterior = display.innerHTML; 
        display.innerHTML = "Operação Inválida";
        setTimeout(() => {
            display.innerHTML = resultado_anterior;
        }, 1000)
    }
})
tecla_ac.addEventListener("click", () => {
    display.innerHTML = 0;
})
tecla_maisOuMenos.addEventListener("click", () => {
    if(isNaN(-(display.innerHTML))){
        const resultado_anterior = display.innerHTML; 
        display.innerHTML = "Operação Inválida";
        setTimeout(() => {
            display.innerHTML = resultado_anterior;
        }, 1000)
    }else{
        display.innerHTML = -(display.innerHTML);
    }
})
tecla_del.addEventListener("click", () => {
    if(display.innerHTML != 0){
        const resultado_arr = display.innerHTML.split("")
        resultado_arr.shift()
        display.innerHTML = resultado_arr.join("")
    }
})