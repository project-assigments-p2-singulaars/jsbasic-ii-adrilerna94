//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

let age = 18
//Escribe tu código aquí

if (age >= 18) console.log('Eres mayor de edad');
else console.log('No eres aún mayor de edad');


//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
age = 12;
if (age >= 18){
    console.log('Eres mayor de edad');
} else {
console.log('No eres aún mayor de edad');
}
//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"

let pet = "perro";
//Escribe tu código aquí

pet= `gato`

if (pet === "perro"){
    console.log('Tengo un perro')
}else if(pet === `gato`){
    console.log('tengo un gato')
}else {
    console.log('No tengo una mascota convencional')
}
//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.




//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

switch (pet){
    case 'perro':
        console.log('Tengo un perro')
        break
    case `gato`:
        console.log(`tengo un gato`)
        break
    default:
        console.log(`No tengo una mascota convencional`)
        break    
}


//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"

let weather = "soleado"

let result = weather === `soleado` ? `me vestiré con un vestido` : 'me vestiré con pantalón';

console.log(result)

//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.
weather = `nublado`
result = weather === `soleado` ? `me vestiré con un vestido` : 'me vestiré con pantalón';

console.log(result)
//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

let value = '1';

// value = 1;

// value = 1 == 2;

switch (typeof(value)){
    case 'string':
        console.log('Es un string')
        break
    case 'number':
        console.log('It is a number')
        break
    default:
        console.log('no es ni número ni string')
        break
}


//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

for (let index = 0; index <= 10; index +=1){
    console.log(index);
}


//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = {
    ada:{
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    margaret:{
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    grace:{
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    hedy:{
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }     
}

// Al ser originalmente un array no podía utilizar el bucle for in. Si podia utilizar el bucle for in para objetos.
// por ese motivo cambie de array de objetos a un objeto que contenía otros objetos
for (const index in programmers){
    console.log(index + ': ' + programmers[index].name  + ' ' + programmers[index].lastname + ", su aporte fue " + programmers[index].knowledge);
}
//Escribe tu código aquí


//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Rocío', 'Lola', 'Antía', 'Laura', 'Noelia']

//Escribe tu código aquí
for (const nombre of names){
    console.log('HOla, mi nombre es ' + nombre)
}

//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

//Escribe tu código aquí
let number = 1

while (number < 6){
    console.log(number);
    number = number + 1;
}

//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.

number = 1;
do {
    console.log(number)
    number++;

} while(number <= 5)


//Ejercicio 14: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

function saludar(nombre){
    return 'Buenos días '+ nombre;
}

console.log(saludar('Josh'));


const saludarrow = nombrarrow =>{
    let saludo = `Buenas noches`
    return saludo + nombrarrow;
};

console.log(saludarrow(' Manolo el Butanero'));


//Ejercicio 15: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

//Escribe tu código aquí

let calcularAreaRectangulo = (ancho, alto) => {
    return 'Área 🟩 = ' + ancho * alto
};

console.log(calcularAreaRectangulo(32, 12));

function calcularAreaRectangulito (base, altura){
    return 'Area Rectángulo: ' + base * altura
};

console.log(calcularAreaRectangulito(5,6));