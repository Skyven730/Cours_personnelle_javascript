window.addEventListener('load', function() 
{

    var canvasWidht = 1500; // largeur canvas
    var canvasHeight = 600; // hauteur canvas
    var blockSize = 10; // Taille de block
    var ctx; // c'est le context, c'est la où on va faire notre snake
    var delay = 50; // C'est le délai. En code tous est dit par millisecondes
    var snakee;
    var canvas;
    var applee;
    var widthInBlocks = canvasWidht / blockSize; // largeur en blocks
    var heightInBlocks = canvasHeight / blockSize; // hauteur en blocks
    var score;

    function init() // C'est une fonction par défaut qui permet d'initialiser des choses dans le code: ici on va initialiser le canvas, le serpent et la pomme, et lancer le rafraichissement du canvas, ce qui va permettre de faire bouger le serpent, par exemple, quand on appuie sur une touche, on va changer la direction du serpent, etc.
    {
        canvas = document.createElement('canvas'); // On a créer un élément et l'élément canvas est en soit notre feuille blanche
        canvas.width = canvasWidht;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas); // Ici, on a attaché le tag dans le body donc de la page et le tag est le canvas
        
        ctx = canvas.getContext('2d'); // Ici on a pris le context de notre canvas et mis en 2d
        snakee = new Snake([[6,4] , [5,4] , [4,4]], "right"); // On a créer un serpent qu'on va controler pour jouer, on lui a donné une position de départ, et une direction
        applee = new Apple([9,10]); // On a créé une pomme à une position donnée
        score = 0;
        refreshCanvas(); // C'est ici que le canvas va être rafraichis
    } 

    function drawBlock(ctx, position)
    {
        var x = position[0] * blockSize // C'est la première position de notre block multiplier par la taille de la block
        var y = position[1] * blockSize // C'est la deuxième position de notre block
        ctx.fillRect(x, y, blockSize, blockSize); // Pour remplire le rectangle

    }
    
    function refreshCanvas() // On va l'appeller refreshCanvas, c'est ce qui nous permettra de rafraichier le canvas pour que l'animation du snake bouge
    {
        snakee.advance(); // On fait avancer le serpent

        if(snakee.checkCollision()) // On vérifie si le serpent a eu une collision
        {
            // GAME OVER
            ctx.save();
            ctx.fillText("Game Over", 5, 15); // Servant a faire un text et le placant a un endroit
            ctx.fillText("Appuyer sur la touche Espace pour rejouer", 5, 30)

            ctx.restore();
            return; // On arrête la fonction
        }
        else if(snakee.isEatingApple(applee)) // On vérifie si le serpent mange la pomme
        {

            score++; // Pour permettre au score d'augmenter de 1 a chaque fois que je mange une pomme

            do
            {
                applee.setNewPosition(); // On change la position de la pomme
            }
            while(applee.onSnake(snakee)) // On vérifie si la pomme n'est pas sur le serpent
        }

        // tous ce bout de code est dans le refresh qu'on a crée
        ctx.clearRect(0, 0, canvasWidht, canvasHeight); // Ici toute les secondes que j'ai donné il va effacer la position actuelle pour en faire une nouvelle
        // fillRect c'est pour créer un rectangle, les deux premier sont pour la largeur et la hauteur de la distance de bordure, et le deuxième c'est la largeur et la hauteur du rectangle
        snakee.draw(); // On dessine le serpent
        applee.draw(); // On dessine la pomme
        drawScore();
        setTimeout(refreshCanvas, delay) // Et toute la fonction RefrechCanvas va être répété pour faire un petite animation
    }


    function GameOver() {
        ctx.save();
        ctx.fillText("Game Over", 5, 15); // Servant a faire un text et le placant a un endroit
        ctx.fillText("Appuyer sur la touche Espace pour rejouer", 5, 30)

        ctx.restore();
    }

    function restart()
    {
        // On a fait un nouveau serpent pour le rejouer
        snakee = new Snake([[6,4] , [5,4] , [4,4]], "right"); // On a créer un serpent qu'on va controler pour jouer, on lui a donné une position de départ, et une direction
        applee = new Apple([9,10]); // On a créé une pomme à une position donnée
        score = 0;
        refreshCanvas(); // C'est ici que le canvas va être rafraichi
    }

    function drawScore()
    {
        ctx.save();
        ctx.fillText(score.toString(), 5, canvasHeight - 5);

        ctx.restore();
    }
    

    init(); // Ici on appelle la fonction pour que ce qu'on a déclaré dans la fonction init soit exécuté 

    function Snake(body, direction) // C'est une fonction constructeur qui va nous permettre de créer des serpent, on va lui passer le corps et la direction
    {
        this.body = body;
        this.direction = direction || "right"; // Par défaut le serpent va vers la droite
        this.ateApple = false; // Par défaut le serpent n'a pas mangé la pomme
        this.draw = function() // Ce qui nous permettra de dessiner le serpent
        {
            ctx.save(); // Il permettra de sauvegarder le contenu comme il était avant
            ctx.fillStyle = "#008080"; // ici c'est un élément Style, j'ai choisis la couleur
            for(var i = 0; i < this.body.length; i++)
            {
                drawBlock(ctx, this.body[i]) // il permettra de déssiner nos pixel
            }
            ctx.restore();
                
        };
        this.advance = function() // la fonction qui permettra de faire avancer le snake
        {
            var nextPosition = this.body[0].slice(); // on va lui faire bouger d'une autres position
            switch(this.direction) // ici on va vérifier la direction
            {
                case "left":
                    nextPosition[0] -= 1; // on va décrémenter la position x de 1
                    break;
                case "right":
                    nextPosition[0] += 1; // on va incrémenter la position x de 1
                    break
                case "up":
                    nextPosition[1] -= 1; // on va décrémenter la position y de 1
                    break;
                case "down":
                    nextPosition[1] += 1; // on va incrémenter la position y de 1
                    break;
                default:
                    throw("Invalid Direction"); // on va lancer une erreur si la direction n'est pas valide
            }
            this.body.unshift(nextPosition); // il permettra d'ajouter un élément au début du array
            if(!this.ateApple) // si le serpent n'a pas mangé la pomme
                this.body.pop(); // il permettra de supprimer la dernière elements du arrays
            else
                this.ateApple = false; // on remet à false car le serpent a déjà mangé la pomme
        };

        this.setDirection = function(newDirection) // Ce qui permettra de définir la direction
        {
            var allowedDirections; // on va stocker les directions autorisées
            switch(this.direction) // on va vérifier la direction actuelle
            {
                case "left":
                case "right":
                    allowedDirections = ["up", "down"]; 
                    break;
                case "up":
                case "down":
                    allowedDirections = ["left", "right"];
                    break;
                default:
                    return // on ne fait rien si la direction actuelle n'est pas valide
            }

            if(allowedDirections.indexOf(newDirection) > -1) // on va vérifier si la nouvelle direction est dans les directions autorisées
            {
                this.direction = newDirection; // on va définir la nouvelle direction: si la direction actuelle est gauche ou droite, on ne peut aller que en haut ou en bas, et vice versa
            }

        };

        this.checkCollision = function() // Ce qui permettra de vérifier les collisions
        {
            var wallCollision = false; // on va vérifier la collision avec les murs
            var snakeCollision = false; // on va vérifier la collision avec le serpent lui-même
            var head = this.body[0]; // on va prendre la tête du serpent
            var rest = this.body.slice(1); // on va prendre le reste du corps du serpent, le slice(1) permet de prendre tous les éléments à partir de l'index 1, pourquoi le 1 est entre parenthèse ? Car on veut exclure la tête du serpent qui est à l'index 0
            var snakeX = head[0]; // on va prendre la position x de la tête du serpent, c'est la première position du array head
            var snakeY = head[1]; // on va prendre la position y de la tête du serpent, c'est la deuxième position du array head
            var minX = 0; // position minimale x, c'est le bord gauche du canvas
            var minY = 0; // position minimale y, c'est le bord haut du canvas
            var maxX = widthInBlocks - 1; // position maximale x, c'est le bord droit du canvas, on fait -1 car les positions commencent à 0
            var maxY = heightInBlocks - 1; // position maximale y, c'est le bord bas du canvas, le heightInBlocks est la hauteur en blocks, pourquoi -1 ? Car les positions commencent à 0, mais pourquoi doit être sonstrait à maxY ? Car si la tête du serpent dépasse maxY, c'est une collision avec le mur
            var isnotBetweenHorizontal = snakeX < minX || snakeX > maxX; // on va vérifier si la position x de la tête du serpent est en dehors des limites horizontales
            var isnotBetweenVertical = snakeY < minY || snakeY > maxY; // on va vérifier si la position y de la tête du serpent est en dehors des limites verticales

            if(isnotBetweenHorizontal || isnotBetweenVertical) // si la tête du serpent est en dehors des limites horizontales ou verticales
            {
                wallCollision = true; // on a une collision avec le mur
            }

            for (var i = 0; i < rest.length; i++) // on va vérifier la collision avec le serpent lui-même
            {
                if(snakeX === rest[i][0] && snakeY === rest[i][1]) // si la position x et y de la tête du serpent est égale à la position x et y d'une partie du corps du serpent
                {
                    snakeCollision = true; // on a une collision avec le serpent lui-même
                }
            }

            return wallCollision || snakeCollision; // on retourne true si il y a une collision avec le mur ou avec le serpent lui-même

        };

        this.isEatingApple = function(appleToEat) // Ce qui permettra de vérifier si le serpent mange la pomme
        {
            var head = this.body[0]; // on va prendre la tête du serpent
            if(head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]) // si la position x et y de la tête du serpent est égale à la position x et y de la pomme
            {
                this.ateApple = true; // On dit au serpent qu'il à mangé la pomme
                return true; // on retourne true si le serpent mange la pomme
            
            } else {
                return false; // on retourne false si le serpent ne mange pas la pomme
            }
        }

    }

    function Apple(position)
    {
        this.position = position;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#00ffff";
            ctx.beginPath(); // on commence un nouveau chemin de dessin: tout ce qui est dessiné après cet appel fait partie de ce chemin
            var radius  = blockSize / 2; // on définit le rayon de la pomme
            var x = this.position[0] * blockSize + radius; // on calcule la position x du centre de la pomme: on multiplie la position x par la taille du block et on ajoute le rayon
            var y = this.position[1] * blockSize + radius; // on calcule la position y du centre de la pomme
            ctx.arc(x, y, radius, 0, Math.PI*2, true); // on dessine un cercle: le centre est (x, y), le rayon est radius, on fait un cercle complet (0 à 2*PI): le dernier paramètre indique le sens de dessin (true pour le sens anti-horaire)
            ctx.fill(); // on remplit le cercle avec la couleur définie précédemment: ici, c'est la couleur de la pomme
            ctx.restore(); // On restaure le contexte pour revenir à l'état précédents

        }

        this.setNewPosition = function()
        {
            var newX = Math.round(Math.random() * (widthInBlocks - 1)); // on génère une nouvelle position x aléatoire pour la pomme, en s'assurant qu'elle reste dans les limites du canvas
            var newY = Math.round(Math.random() * (heightInBlocks - 1)); // on génère une nouvelle position y aléatoire pour la pomme
            this.position = [newX, newY]; // on met à jour la position de la pomme avec les nouvelles coordonnées
        }
        this.onSnake = function(snakeToCheck)
        {
            var isOnSnake = false; // on initialise une variable pour vérifier si la pomme est sur le serpent
            for(var i = 0; i < snakeToCheck.body.length; i++) // on parcourt chaque segment du corps du serpent
            {
                if(this.position[0] === snakeToCheck.body[i][0] && 
                   this.position[1] === snakeToCheck.body[i][1]) // si la position de la pomme correspond à la position d'un segment du serpent
                {
                    isOnSnake = true; // on indique que la pomme est sur le serpent
                }
            }
            return isOnSnake; // on retourne le résultat de la vérification
        }
    }

    document.addEventListener('keydown', function handleKeyDown(e)
    {
        var key = e.keyCode; // on va détecter quelle touche a été appuyée
        var newDirection; // on va stocker la nouvelle direction
        switch(key) // on va vérifier la touche appuyée
        {
            case 37: // flèche gauche
                newDirection = "left";
                break;
            case 38: // flèche haut
                newDirection = "up";
                break;
            case 39: // flèche droite
                newDirection = "right";
                break;
            case 40: // flèche bas
                newDirection = "down";
                break;
            case 32:
                restart();
                return
            default:
                return; // on ne fait rien si une autre touche est appuyée
        }

        snakee.setDirection(newDirection); // on va définir la nouvelle direction du serpent

    })
});