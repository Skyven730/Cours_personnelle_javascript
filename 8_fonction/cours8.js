// "Function" sert à regrouper un ensemble d'instruction, si je mets une variable-fonction (multiply), ca va donner le résultat de cette variable-fonction. Si je lui donne un autres non, ca ne va pas va pas affiché même function.

/* --EXEMPLE--
function name(paramter1, parameter2, ect)
{
    Code A executer
    return Result;
} */

function multiply(number1, number2, number3)
{
    return number1 * number2 * number3;
}

var a = 5;
var b = 6;

var result1 = multiply(a, b, a);

console.log(result1);

function addition(number1,number2,number3)
{
    return number1 + number2 + number3;
}

var result2 = addition(a, b, a);

console.log(result2);

function soustraction(number1, number2, number3)
{
    return number1 - number2 - number3;
}

var result3 = soustraction(a, b, a)

console.log(result3)

function division(number1, number2, number3)
{
    return number1 / number2 / number3;
}

var result4 = division(a, b, a)

console.log(result4)