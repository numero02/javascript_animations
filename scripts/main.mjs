//importation des fonction 
import { anim } from './script1.mjs';
import { anim1 } from './script2.mjs';
import { anim2 } from './script3.mjs';
import { anim3 } from './script4.mjs';
import { anim4 } from './script5.mjs';

//appel des fonctions
anim();
anim1();
var balle = document.querySelector("main .scene2 .balle");
anim2(balle);
var scene3 = document.querySelector("main .scene3");
anim3(scene3);
var scene4 = document.querySelector("main .scene4");
anim4(scene4);