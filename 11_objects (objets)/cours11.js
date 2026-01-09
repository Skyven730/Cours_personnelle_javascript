// Objects est basé sur des propriétés et des methodes (fonctions), et ce code de cette façon

// dans la console il est possible de l'écrire de ces deux façon
var friends = {
    name: "Shino",
    genre: "woman",
    age: 21
};

console.log(friends.name); // Soit comme ça
console.log(friends["genre"]) // Ou soit comme ça

// Avec une boucle
for(var property in friends)
{
    console.log(friends[property]);
}

// Une autre façon de l'utiliser aussi

var dog = new Object();
dog.name = "Foxy";
dog.color = "beige";
dog.age = 6;
dog.aboie = function()
{
    console.log("Wouaf Wouaf");
}

dog.aboie()