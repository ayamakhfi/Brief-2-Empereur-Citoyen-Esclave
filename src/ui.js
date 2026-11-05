import { mainjoueur, mainordnateur } from "./game.js";

// --------------------affichage des carte-----------------
const cartesj=document.getElementById("cartesjoueur")
 export function affichercartesjoueur(mainjoueur){
    cartesj.innerHTML="";
mainjoueur.forEach((cartej)=>{

const carte=document.createElement("div");
carte.className="border-2 border-amber-600 bg-emperur-cartes rounded-lg h-[165px] w-[110px] shrink-0 flex items-center hover:shadow-lg hover:shadow-amber-900 hover:-translate-y-3 ";
carte.innerHTML=` 
         <img data-action="choisi" data-id="${cartej.name}" src="${cartej.img}" alt="${cartej.name}">`;

cartesj.appendChild(carte);});
}

affichercartesjoueur(mainjoueur);




// ---------------------------votre carte----------------------


   export function cartechoisi(imgchoisi){
    const imgv=mainjoueur.find((carte)=>carte.name===imgchoisi);
    return imgv;
   }







// -----------------------------------choix aléatoire de carte----------------------
















