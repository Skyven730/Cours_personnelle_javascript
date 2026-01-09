// Les fonctions constructeurs permet de créer plusieurs objets de même type

function proches(name, genre, age)
{
    this.name = name;
    this.genre = genre;
    this.age = age;
    {
        console.log("Coucou " + this.name);
    }
}

var maMoitier = new proches("Shino", "femme", 21);
var lePolyvalent = new proches("Maxime", "homme", 19)
var lePhiloshophe = new proches("Aleksandre", "homme", 23)
var lAnimateur = new proches("Marc", "homme", 19)

console.log(maMoitier);
console.log(lePolyvalent);
console.log(lePhiloshophe);
console.log(lAnimateur);