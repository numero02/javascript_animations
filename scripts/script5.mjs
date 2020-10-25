export function anim4(scene) {
    /**
     * fonction qui permet de créer des point à des positions aléatoires en cliquant sur une div
     * et en recliquant une deuxième fois l'animation s'arrête
     */
    var verif = 0;

    scene.addEventListener("mousedown", ajouterPoint);

    function ajouterPoint() {

        if (verif !== 0) {
            supprimerPoint();
            verif = 0;
        } else {
            dessinePoint();
        }
    }
    //fonction qui permet de dessiner des points et les rajouter dans une div
    function dessinePoint() {
        var point = document.createElement("div");
        point.classList.add("feuxArtifice");
        scene.appendChild(point);
        var posX = Math.random() * scene.offsetWidth;
        var posY = Math.random() * scene.offsetHeight;
        point.style.left = posX + "px";
        point.style.top = posY + "px";
        verif = window.requestAnimationFrame(dessinePoint);
    }
    // cette fonction elle est appelée pour supprimer les points lorsqu'on reclique sur le div 
    function supprimerPoint() {
        window.cancelAnimationFrame(verif);
        while (scene.hasChildNodes()) {
            scene.removeChild(scene.lastChild);
        }
    }
}