let nombre = document.getElementById('nombre')
const sueldo = "200.000"; 

let mensaje = alert('buenos dias empleando/a para saber tu sueldo escribe tu nombre')

nombre.onclick = function (){
    nombre = prompt ('ingresa tu nombre')
    alert("Hola  " + nombre + " tu sueldo es $" + sueldo);
}