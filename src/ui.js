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

 export function shuffle(array){
  let currentIndex=array.length;
   let randomcarte= Math.floor(Math.random()*currentIndex);
  //  console.log("e",randomcarte);
  return array[randomcarte];
 }
 shuffle(mainordnateur);

 const randcarte=document.querySelector(".randcarte");
 const contrecarte=shuffle(mainordnateur);
 randcarte.innerHTML=`<div class="carteflipped-ORD relative perspective-[1000px]">
 <div class=" back-face border-2 border-amber-600 bg-emperur-cartes rounded-lg h-[165px] w-[110px] shrink-0 flex items-center ">
         <img src="image/logo.png" alt="logo" class="carte"> </div>
   
     
     
      <div class="front-face border-2 border-amber-600   rounded-lg h-[165px] w-[110px] shrink-0  ">
     <img data-action="choisi" data-id="${contrecarte.name}" src="${contrecarte.img}" alt="${contrecarte.name}">
      </div>
      </div>
       `;
     
     console.log("contrecarte",contrecarte);














