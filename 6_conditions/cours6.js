// Alors les conditions sont composésd de "if", "else if" et "else", "if" qui veut dire "si", "if else" qui veut dire "ou sinon" et "else" qui veux dire "sinon"
// Les conditions se font toujours acompagné d'une parenthèse puis un acolade avec

// --EXEMPLE--
/* if(condition1)
{
    console.log("Executes ce code");
}
else if(condition2)
{
    console.log("La condition 1 n'est pas vraie mais la 2 l'est");
}
else
{
    console.log("Alors executes ce code la !";)
} */

// --MISE EN PRATIQUE--
// Si je le mets a 70, il va afficher la première condition
var speed = 70

if(speed < 80)
{
    console.log("Tu roules a la bonne vitesse");
}
else if(speed < 100)
{
    console.log("Il faut que tu ralentisses un petit peu");
}
else
{
    console.log("Tu roules beaucoup trop vite, c'est dangeureux !");
}

// Si je le mets a 90 il va afficher la deuxième condition
var speed = 90

if(speed < 80)
{
    console.log("Tu roules a la bonne vitesse");
}
else if(speed < 100)
{
    console.log("Il faut que tu ralentisses un petit peu");
}
else
{
    console.log("Tu roules beaucoup trop vite, c'est dangeureux !");
}

// Si les condition n'ont pas été pris en compte, il mets le dernier message
var speed = 110

if(speed < 80)
{
    console.log("Tu roules a la bonne vitesse");
}
else if(speed < 100)
{
    console.log("Il faut que tu ralentisses un petit peu");
}
else
{
    console.log("Tu roules beaucoup trop vite, c'est dangeureux !");
}
console.log("------------------")

// le terme "switch" c'est un peu près le même principe.
// le "switch" est le commutateur, "case" le cas, "break" la pause et "default" qui sera par défaut
// Si je choisi le Bleu il prend le premier case et fait le break
var favoriteColor = "turquoise";

switch(favoriteColor)
{
    case "turquoise":
        console.log("Wouah ! J'adore le turquoise !");
        break;
    case "beige":
        console.log("Oh toi aussi t'aime cette couleur ? c'est trop cool !");
        break;
    default:
        console.log("Désolé l'ami, mais je ne connais pas cette couleur la, peut-tu me le montrer ?");
}

// Si je marque beige, il mettra la deuxième case et faire le break
var favoriteColor = "beige";

switch(favoriteColor)
{
    case "turquoise":
        console.log("Wouah ! J'adore le turquoise !");
        break;
    case "beige":
        console.log("Oh toi aussi t'aime cette couleur ? c'est trop cool !");
        break;
    default:
        console.log("Désolé l'ami, mais je ne connais pas cette couleur la, peut-tu me le montrer ?");
}

// Si aucune des case sont similaire alors il mettra le défault
var favoriteColor = "sable doré";

switch(favoriteColor)
{
    case "turquoise":
        console.log("Wouah ! J'adore le turquoise !");
        break;
    case "sarcelle":
        console.log("Oh toi aussi t'aime cette couleur ? c'est trop cool !");
        break;
    default:
        console.log("Désolé l'ami, mais je ne connais pas cette couleur la, peut-tu me le montrer ?");
}

// on peut aussi le faire de cette facon quand il choisi sarcelle, je vais juste la faire sur le premier case, mais on peut mettre deux case sur avant de mettre le break
var favoriteColor = "sarcelle";

switch(favoriteColor)
{
    case "turquoise":
    case "sarcelle":
        console.log("Wouah ! J'adore le turquoise et le sarcelle !");
        break;
    case "beige":
        console.log("Oh toi aussi t'aime cette couleur ? c'est trop cool !");
        break;
    default:
        console.log("Désolé l'ami, mais je ne connais pas cette couleur la, peut-tu me le montrer ?");
}