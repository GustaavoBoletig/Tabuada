let formulario = document.querySelector('.formulario');
let i = 0
formulario.addEventListener('keypress' , function(e){
if(e.key === "Enter") {
console.log('clicou')
formulario = Number(document.querySelector('.formulario').value);
let res1 = document.getElementById('resultado1');
let res2 = document.getElementById('resultado2');
let res3 = document.getElementById('resultado3');
let res4 = document.getElementById('resultado4');
let res5 = document.getElementById('resultado5');
let res6 = document.getElementById('resultado6');
let res7 = document.getElementById('resultado7');
let res8 = document.getElementById('resultado8');
let res9 = document.getElementById('resultado9');
let res10 = document.getElementById('resultado10');

res1.innerHTML = ('<b>' + formulario + ' x ' + 1 + ' = ' + (formulario * 1) + '<b>' + '<br>');
res2.innerHTML = ('<b>' + formulario + ' x ' + 2 + ' = ' + (formulario * 2) + '<b>' + '<br>');
res3.innerHTML = ('<b>' + formulario + ' x ' + 3 + ' = ' + (formulario * 3) + '<b>' + '<br>');
res4.innerHTML = ('<b>' + formulario + ' x ' + 4 + ' = ' + (formulario * 4) + '<b>' + '<br>');
res5.innerHTML = ('<b>' + formulario + ' x ' + 5 + ' = ' + (formulario * 5) + '<b>' + '<br>');
res6.innerHTML = ('<b>' + formulario + ' x ' + 6 + ' = ' + (formulario * 6) + '<b>' + '<br>');
res7.innerHTML = ('<b>' + formulario + ' x ' + 7 + ' = ' + (formulario * 7) + '<b>' + '<br>');
res8.innerHTML = ('<b>' + formulario + ' x ' + 8 + ' = ' + (formulario * 8) + '<b>' + '<br>');
res9.innerHTML = ('<b>' + formulario + ' x ' + 9 + ' = ' + (formulario * 9) + '<b>' + '<br>');
res10.innerHTML = ('<b>' + formulario + ' x ' + 10 + ' = ' + (formulario * 10) + '<b>' + '<br>');

if(isNaN(formulario)){
document.getElementById('resultado').innerHTML="<div class=erro>Opa Você Não Digitou um Número</div>"
}
i++

}

})