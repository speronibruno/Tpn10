/*Ejercicio 1*/
function eje1() {
    alert("Ver ejercicio en consola");
    let nombre = "Programación" + " Fácil.";
    let saludo = "Les doy la bienvenida a ";
    let fraseCompleta = saludo + nombre;
    console.log(fraseCompleta);
    let curso = "Aprende a programar en minimos pasos."
    let frase_curso = fraseCompleta + " " + curso;
    console.log(frase_curso);

}
/*Ejercicio 2 */
function eje2() {
    alert("Ver ejercicio en consola");
    let frase = "JavaScript " + "es un lenguaje " + "esencial para crear" + " sitios web poderosos.";
    console.log(frase);
}
/*Ejercicio 3 */
function eje3() {
    alert("Ver ejercicio en consola");
    let numeroString1 = "10";
    let numeroString2 = "20";
    let numeroString3 = "30";
    let concatenaNumeros = "Primer numero " + numeroString1 + " " + "Segundo numero " + numeroString2 + " " + "Tercer numero " + numeroString3;
    console.log(concatenaNumeros);
}
/*Ejercicio 4*/
function eje4() {
    var nombre_apellido = prompt("Ingresa nombre y apellido: ");
    var age = prompt("Cual es tu Edad: ");
    var mensaje = "Te llamas " + nombre_apellido + " y tienes " + age + " años";
    console.warn(mensaje);
}
/*Ejercicio 5 */
function eje5() {
    let edad;
    let sexo = prompt("Introduce masculino o femenino");
    const masculino = "masculino";
    const femenino = "femenino";
    edad = prompt("Introduce tu edad");
    if (edad >= 18 && sexo === masculino) {
        alert("Puedes entrar, eres mayor de edad.");
    } else {

        if (edad >= 20 && sexo === femenino) {
            alert("Puedes entrar, eres mayor de edad.");
        } else { alert("No puedes ingresar, eres menor de edad") }

    }
}
