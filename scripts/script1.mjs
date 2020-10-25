export function anim() {
    // ces deux fonctions permettent d'animer le titre
    ajouterAnimation1();
    ajouterAnimation2();
    //fonction pour le premier div
    function ajouterAnimation1() {
        var titre1 = document.querySelector("header div:nth-child(1)");
        titre1.classList.add("anim1");
    }
    //fonction pour le deuxième div 
    function ajouterAnimation2() {
        var titre2 = document.querySelector("header div:nth-child(2)");
        titre2.classList.add("anim2");
    }
};