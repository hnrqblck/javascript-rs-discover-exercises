/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5/9;

    F = C * 9/5 + 32;
*/


const convertDegrees = (degrees) => {

    let array = Array.from(degrees);
    let indexC = array.indexOf('C');
    let indexF = array.indexOf('F')
    let fahrenheit;
    let celsius;

    if (array[indexC] === 'C') {
        array.splice(indexC, 1);
        celsius = array.join("");
        fahrenheit = Number(celsius) * 9/5 + 32;
        return fahrenheit;
    } else if(array[indexF] === 'F'){
        array.splice(indexF, 1);
        fahrenheit = array.join("");
        celsius = (Number(fahrenheit) - 32) * 5/9;
        return celsius;
    } else {
        return "Pass a real temperature in Celsius or Fahrenheit"
    }

};

console.log(convertDegrees('32C'));