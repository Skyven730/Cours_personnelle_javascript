// Ici on va faire une boucle, comme toujours on va lui mettre une variable et faire en sorte que la variable soit ajouté jusqu'a le nombre demandé
// on va utiliser "while" pour ca toujour accompagné des parenthèses et des accolades et "while" signifie "Alors que"
// ATTENTION, ne surtout pas oublier de mettre number++ (il peut avoir d'autre alternative), car sinon ca va faire un nombre infini et si cela s'accumule trop il ce pourrait que le navigateur plante
var number = 0;

while(number <= 3)
{
    console.log(number);
    number++;
}

// Il est possible aussi de faire de cette façon
for(var i = 0; i < 5; i++)
{
    console.log(i)
}