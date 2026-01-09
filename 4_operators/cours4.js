// Voici un calcul, on aime les calculs n'est ce pas ? Blague appart, j'ai calculé x et y en fonction de chaque opérateur tout en donnant de résultats différentes grâce au noms de variable que j'ai donné
var x = 12;
var y = 5;

var resultAddition = x + y;
var resultSoustraction = x - y;
var resultMultiplication = x * y;
var resultDivision = x / y;

console.log(resultAddition);
console.log(resultSoustraction);
console.log(resultMultiplication);
console.log(resultDivision);

// J'ai fait un résultat Arondie d'une division, comme en math si le résultat est supérieur ou égal à 0.5, il passera à 1, au cas contraire il restera 0.
// Ici il est passé a 2 car le résultat est 2.4, donc le résultat reste 2
var resultArrondie = x % y;

console.log(resultArrondie);

// On peux aussi faire que x puisse ce rajouter de 1 en plus en faisant x++ et je peux acumuller le x++ pour que le x augmente de 1 a chaque fois et ca fonctionne aussi avec tous les autre opérateur aussi
// Mais quand je mets une variable avec x++ le nombre reste le même car la varible c'est le x comme resultat puis seulement après il additionne
// Pour eviter ca on va plutôt mettre ++x car il va ajoute de 1 avant le resultat de x
// Mais bon c'est assez compliquer comme méthode donc il y a des boucles pour ca (qu'on utilisera plus tard)
var resultAjoute = ++x;

console.log(resultAjoute);

// Bon je sais que c'est pas commun, mais on peut aussi calculer des mots. Comme on peut le constater sans les paranthèse entre les calculs, les mots sont collés et avec ils ne le sont pas
// Et oui j'ai déjà essayé mais on peux les soustraires, multiplier ou diviser, mais le resultat sera juste "NaN"
var string1 = "Salut";
var string2 = "Jey";

console.log(string1 + string2);
console.log(string1 + " " + string2);
console.log(string1 - string2);