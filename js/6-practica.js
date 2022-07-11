let numero1 = parseInt(prompt('Ingrese un primer numero'));
let numero2 = parseInt(prompt('Ingrese un segundo numero'));

console.log(numero1);
console.log(numero2);

if(numero1>numero2){
    document.write('El primer numero es el mayor '+ numero1);
}

else{
    document.write('El segundo numero es el mayor' + numero2);
}