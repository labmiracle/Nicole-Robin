let dias = 0;
{}
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
var altura = 0
while(alturaDeseada != altura){
    altura = altura + (velocidadCrecimiento - velocidadDecrecimiento)
    dias = dias + 1
}    
return dias;
}
console.log(calcularDiasCrecimiento(2,1,6));

