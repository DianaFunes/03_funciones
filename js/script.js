//Funciones--------------------------------------------------------------------------

//comnunes

let seccion = document.getElementById("resultados");
function votaciones(){
 let edad = 17;
 //operadores ternarios
 let votar = edad >= 18 ? "Puede votar" : "No puede votar";

 //vaciar el resuoltaod dentro de una secciones
 seccion.innerHTML += votar;

}

votaciones();

//funciones anonimas pueden o no regrsar un resultado, pasar parametros

let producto = function(a,b){
 return a * b;
}

let res = producto(3,6);
seccion.innerHTML += '<br>' + ' ' + res;

//por constructor usando pase de parameteos 

miFuncion = new Function("a", "b", "c", " return(a * b) + c;");
let res2 = miFuncion(5, 7, 3);
seccion.innerHTML += '<br>' + res2;

//funciones anonimas autoinvocadas, no tiene nombre
(function(){
    seccion.innerHTML += '<br> Soy una Funcion Anonima';
})();

//Funcion Autoinvocada con pase de argumentos
//parametros > son los nombres que aparecen en la definicion de una funcion
// argumentos > son los valores que pasamos a una funcion 

(function(a=3, b=5){
    seccion.innerHTML += '<br> Suma = ' + (a + b);
}
)();

/*ventana de alerta
//variables no definidas. 
function suma(a,b)
{
    if(b == undefined) b = 0;
    return a+b;
}

var res3 = suma(4);
alert(res3);
*/

/*Mas argumentos
Cuando llamamos a una funcion con mas argumentos. 

function valores(){
    alert("El numero de argumentos es" + arguments.length);
    for(var i=0; i< arguments.length; i++ )
    alert("argumentos" + i + " = " + arguments[i]);
}
valores(4, 6, 8, 10);*/

//REALIZA LOS SIGUIENTES EJERCICIOS UTILIZANDO SOLO FUNCIONES
let ejercicio01 = document.getElementById("ejercicio01");
//1. CALCULAR LA SUPERFICIE DE UN TRIANGULO, SOLICITAR AL USAUARIO BASE Y ALTURA. 

function triangulo() {
    var a = parseInt(document.getElementById("lado01").value);
    var b = parseInt(document.getElementById("lado02").value);

    let area = (a * b) / 2;
  
    ejercicio01.innerHTML = area;
    
  }
//2. SOLICITAR  A UN USUARIO 5 DATOS PERSONALES E IMPRIMIRLOS EN UNA SECCION
let ejercicio02 = document.getElementById("ejercicio02");
function datos(){
    var d01 = document.getElementById("dato01").value;
    var d02 = parseInt(document.getElementById("dato02").value);
    var d03 = document.getElementById("dato03").value;
    var d04 = document.getElementById("dato04").value;
    var d05 = document.getElementById("dato05").value;

    let mostrar = 'Sus datos son: <br>' + 'Nombre : ' + d01 + '<br> Edad: ' + d02 + '<br> Apellido: ' + d03 + '<br>Ciudad: ' + d04 + '<br> Serie Favorita: ' + d05; 
    ejercicio02.innerHTML = mostrar;
}
//3. cULCULAR EL SUELDO DE 5 TRABAJADORES EN UNA EMPRESA DE CLAZADO, Y OBTENER EL 
    //TOTAL DE NOMINA A PAGAR.
    let ejercicio03 = document.getElementById("ejercicio03");
    function sueldos(){
        var a = parseInt(document.getElementById("sueldo01").value);
        var b = parseInt(document.getElementById("sueldo02").value);
        var c = parseInt(document.getElementById("sueldo03").value);
        var d = parseInt(document.getElementById("sueldo04").value);
        var e = parseInt(document.getElementById("sueldo05").value);
        var nomina = a+b+c+d+e;

        ejercicio03.innerHTML = '<br> Los sueldos son:<br> Trabajador 01 = ' + a + '<br>Trabajador 02 = '+b+'<br>Trabajador 03= '+c+'<br>Trabajador 04='+ d+'<br>Trabajador 05='+e+'<br>Total de nomina a pagar = '+ nomina;
    }
    ;
//4. CALCULAR EL PRODUCTO DE UN ALUMNO TENIENDO 3 MATERIAS EN EL CUATRIMENTRES.
let ejercicio04 = document.getElementById("ejercicio04");
function nota(){
    var a = parseInt(document.getElementById("calf01").value);
    var b = parseInt(document.getElementById("calf02").value);
    var c = parseInt(document.getElementById("calf03").value);

    var cf= (a+b+c)/3;

    ejercicio04.innerHTML = '<br> Calificaion final = ' + cf;
};


//mover texto sobre eje x y y