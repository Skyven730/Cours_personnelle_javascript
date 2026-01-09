// Les booleans sert principalement à dire si quelque chose est vrai ou faux et il y a que ces deux valeur là
// Quand je mets une variable et que c'est égal à la valeur que j'ai donné a x il va mettre "true" dans le cas inverse ce sera "false"
// Maintenant on va utiliser les comparisons
var x = 5;
var y = 12;

// Le === pour affirmer que la valeur est exact ou non
var myBoolean = (x === 5);
// Le !== pour affirmer si il est différent du résultat ou non
var myBoolean2 = (x !== 5);
// Le > pour affirmer que c'est supérieur du résultat ou non, qui fonctionne aussi avec >=
var myBoolean3 = (x > 4);
// Le < pour affirmer que c'est inférieur du résultât ou non, qui fonctionne aussi avec <=
var myBoolean4 = (x < 4);
// On peut aussi attribuer un && dans le code, ce qui signifique qu'on peut mettre que x et(&&) y, ici si une des deux variables est fausse, alors la console affichera false
// x est correct mais y ne l'est pas donc il affiche false, il faut que les deux soient correct pour qu'il affiche true
var myBoolean5 = (x>4 && y<11);
// Pour "ou" on utilise ce caractère la ||, ca pourrais donner ca dans un code: x ou(||) y, ici si l'une des deux variable est fausse, la console affichera true car il y a une variable qui est vrai
// x est correct mais y ne l'est pas, mais la console affiche true parce que x est vrai. Si les deux était faux, la console aurait affiché false
var myBoolean6 = (x>4 || y<11);

console.log(myBoolean);
console.log("---------------");
console.log(myBoolean2);
console.log("---------------");
console.log(myBoolean3);
console.log("---------------");
console.log(myBoolean4);
console.log("---------------")
console.log(myBoolean5);
console.log("---------------");
console.log(myBoolean6);
console.log("---------------");

// Bon la on va s'amuser un peu.
// Même principe avec &&, si les deux sont vrai alors c'est true, si l'un des deux est faux alors c'est false et si les deux sont faux alors c'est false
// Avec ||, si les deux sont vrai alors c'est true, si l'un des deux est faux alors c'est true, si les deux sont faux alors c'est false
// Et avec le !, si c'est !true alors c'est false et si c'est !false alors c'est true, donc je rappelle il sert a dire que c'est l'inverse
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("---------------");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("---------------");
console.log(!true)
console.log(!false)