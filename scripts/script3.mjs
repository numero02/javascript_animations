export function anim2(action) {
    /**
     * cette fonction permet à un ballon de se déplacer à l'intérier d'un bloc div 
     * qui a un background d'un terrain de soccer , le ballon se déplace à chaque fois 
     * qu'il y'a un évènement mouse down
     */
    var scene2 = document.querySelector("main .scene2");

    var posX = 0;
    var posY = 0;

    scene2.addEventListener('mousedown', jouer);

    //fonction jouer qui permet de déplacer le ballon
    function jouer(evt) {

        var txt = document.querySelector("main .scene2 p");
        posX = evt.clientX;
        posY = evt.offsetY;
        //changement des positions du ballon à chaque fois qu'il y'a un évenement mousedown
        action.style.top = posY + "px";
        action.style.left = (posX - scene2.offsetLeft - 12) + "px";
        action.style.transition = "left 1s ease-out, top 1s ease-out";
        // affichage des nouvelles postions du ballon
        console.log("client Y " + posY);
        console.log("client X " + posX);

    }

}