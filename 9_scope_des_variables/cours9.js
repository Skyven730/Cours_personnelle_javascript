// Ici je vais utilisier une variable de la function, mais ici ca fonction différement car on ne met pas l'attribut "var" dans la fonction.

var a = 5;
var b = 6;

function calcul(number1, number2, number3)
{
    resultMultiply = number1 * number2 * number3;
    return resultMultiply;
}

var result = calcul(a, b, a);

console.log(resultMultiply);