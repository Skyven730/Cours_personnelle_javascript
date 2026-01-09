// Les Arrays sont des tableaux. On les mets entre crochet [], où on peut mettre plusieurs valeur.
// Je tiens a préciser que la lecture du code ce fait de haut en bas
var fruits = ["pomme", "banane", "orange", "citron"];

// On peut incule des phrases, ce n'est pas obligé de le faire avec la phrase.
console.log(`J'aime la ${fruits[0]} et j'aime aussi l'${fruits[2]}`);

// Ici je vais inclure une boucle avec le Arrays (qui est très utile pour les tableaux)
/* Ce qu'il vient de ce passer c'est que la boucle a ajouté toutes les valeurs qu'il y a dans le Arrays et pour faire ca on lui a inclus le "lenght" après la variables, qui fait que
que la boucle affiche le maximum actuelle de valeur dans le tableau. Et a chaque fois qu'on en rajoute un, la boucle l'affiche automatiquement*/
for(var i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

// On peut aussi en rajouter aussi un valeurs dans un Arrays avec le "push" après la variable qui permet de rajouter un valeur dans le Arrays demandé
/* Après avoir fait cela il faut remettre la boucle car la lecture du code ce fait de haut en bas. Mais je recommande de rajouter la valeur dans le Arrays qu'on a créé histoire
de ne pas ce perdre et aussi le tableaux sera modifié automatiquement*/
fruits.push("Kiwi");

console.log(fruits);

for(var i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

// Et également enlever une valeur du Arrays, quand je ne mets rien, ca enlève la dernière valeur par défaut.
fruits.pop();
console.log(fruits);

// Ici je vais mettre un autres Arrays mais avec les même valeurs que celle de fruits. J'ai mis 2,4 pour dire que tous ce qui est entre la valeur 2 et 4 sont inclu
var agrumes = fruits.slice(2,4);

console.log(agrumes);

// La on a mis un Array avec le string, le number et le boolean
var myArray = ["Pomme", 15, true];

console.log(myArray);

// Et la on a mis un Array dans un autre Array
// J'ai fait en sorte que la 3ème array soit selectionné avec la deuxième valeur de selectionné
var myArray2 = [[0.1] , [5.7] , [12,18]];

console.log(myArray2[2][1]);