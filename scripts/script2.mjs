export function anim1() {
    /**
     * Animation 1 , il faut appuyer sur l'animation et garder le bouton gauche de la souris appuyer
     * pour activer l'animation, une fois que qu'on lâche le bouton gauche de la souris , l'animation
     * s'arrête
     */

    var n = 0;
    var id;

    var bloc = document.querySelector("main .scene1");
    // création d'un addEventListener avec un mousedown pour démarrer l'animation
    bloc.addEventListener("mousedown", function () {

        id = window.requestAnimationFrame(creerNeige);

    });
    //création d'un addEventListener avec mouseup pour arrêter l'animation
    bloc.addEventListener("mouseup", function () {

        id = 0;
        window.cancelAnimationFrame(id);
        enleverNeige();

    });

    // création de la neige
    function creerNeige() {
        var Neige = document.createElement("div");
        Neige.classList.add("element");


        Neige.style.left = aleatoire() + "px";
        console.log(aleatoire());
        bloc.appendChild(Neige);
        Neige.addEventListener("animationend", enleverNeige2);

        if (id !== 0) {
            window.requestAnimationFrame(creerNeige);
        }
    }
    /*
    * fonction aleatoire utiliser pour donner des position aleatoire au départ de l'animation
    * de la neige pour les écrans mobile ou desktop
    */
    function aleatoire() {
        var genere = Math.random();
        if (genere < 0.33) {
            var al = Math.round(Math.random() * 1000) + 450;
        } else if (genere <= 0.66 && genere >= 0.33) {
            var al = Math.round(Math.random() * 1000);
        } else if (genere <= 1) {
            var al = Math.round(Math.random() * 1000) + 950;
        }
        return al;
    }
    /*
    * cette fonction permet d'enlever les flocons de neiges de la div
    * une fois que qu'on a un evenement mouse up
    */
    function enleverNeige() {

        while (bloc.hasChildNodes()) {
            bloc.removeChild(bloc.firstChild);
        }
    }
    /**
     * cette fonction permet d'enlever un flocon de neige une fois 
     * qu'il atteint le bas de la div au moment où on a un évènement  animation end
     */
    function enleverNeige2(evt) {
        var n = evt.target;
        bloc.removeChild(n);
    }


}