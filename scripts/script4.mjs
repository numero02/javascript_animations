export function anim3(cible) {
    /**
     * fonction qui permet de créer des ballons dans un div qui contient une image de ciel en 
     * background
     */

    var posX = 0;
    var posY = 0;
    //la créatiodes ballons se fait à chaque évènement mouse clique
    cible.addEventListener('mousedown', creerUnBallon);

    //fonction qui permet la créations des ballons
    function creerUnBallon(evt) {
        posX = evt.clientX;
        posY = evt.offsetY;

        var balle = document.createElement("div");
        balle.classList.add("ballon");
        cible.appendChild(balle);

        balle.style.top = (posY - 75) + "px";
        balle.style.left = (posX - cible.offsetLeft - 65) + "px";
        console.log("posX : " + (posX - cible.offsetLeft - 12));
        console.log("posY : " + posY);
        // on ajoute un écouteur pour la fin de l'animation pour effacer le ballon
        balle.addEventListener("animationend", effacerBalle, false);
    }
    //suppression du ballon à la de l'animation en utilisant cette fonction
    function effacerBalle(evt) {
        var balle = evt.target;
        balle.removeEventListener('animationend', effacerBalle, false);
        cible.removeChild(balle);
    }


}