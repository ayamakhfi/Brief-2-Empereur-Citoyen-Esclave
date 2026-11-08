import { mainjoueur, mainordnateur } from "./game.js";

// --------------------affichage des carte-----------------
const cartesj=document.getElementById("cartesjoueur")
 export function affichercartesjoueur(mainjoueur){
    cartesj.innerHTML="";
  mainjoueur.forEach((cartej ,index)=>{

const carte=document.createElement("div");
carte.className="border-2 border-amber-600 bg-emperur-cartes rounded-lg h-[140px] w-[95px] lg:h-[165px] lg:w-[110px]  shrink-0 flex items-center hover:shadow-lg hover:shadow-amber-900 hover:-translate-y-3 ";
carte.innerHTML=` 
         <img data-action="choisi" data-index="${index}" data-id="${cartej.name}" src="${cartej.img}" alt="${cartej.name}" class="w-full h-full object-cover">`;

cartesj.appendChild(carte);});

}

affichercartesjoueur(mainjoueur);


// -------------------------------affichage carte ordinateur-------------------------------
const cartesOrd=document.getElementById("carteordinateur")
 export function affichercartesOrd(mainordnateur){
   cartesOrd.innerHTML="";
mainordnateur.forEach((carted)=>{

const carte=document.createElement("div");
carte.className="border-2 border-amber-600 bg-emperur-cartes rounded-lg h-[140px] w-[95px] lg:h-[165px] lg:w-[110px]  shrink-0 flex items-center hover:shadow-lg hover:shadow-amber-900 hover:-translate-y-3 ";
carte.innerHTML=` 
         <img  src="image/logo.png" alt="logo">`;

cartesOrd.appendChild(carte);});
}

affichercartesOrd(mainordnateur);



// ---------------------------votre carte----------------------


   export function cartechoisi(imgchoisi){
    const imgv=mainjoueur.find((carte)=>carte.name===imgchoisi);
    return imgv;
   }







// -----------------------------------choix aléatoire de carte----------------------



const randcarte=document.querySelector(".randcarte");

export function choisiORDcarte(){

  let currentIndex=mainordnateur.length;
   let randomcarte= Math.floor(Math.random()*currentIndex);
 
  return mainordnateur[randomcarte];
} 


export function ordinateurcarte(contrecarte){
 randcarte.innerHTML="";
if (!contrecarte)return;

 randcarte.innerHTML=`<div class="carteflipped-ORD ">
 <div class=" back-face border-2 border-amber-600 bg-emperur-cartes rounded-lg h-[140px] w-[95px] lg:h-[165px] lg:w-[110px]  shrink-0 flex items-center ">
         <img src="image/logo.png" alt="logo" class="carte"> </div>
   
     
     
      <div class="front-face border-2 border-amber-600   rounded-lg h-[140px] w-[95px] lg:h-[165px] lg:w-[110px]  shrink-0 relative  overflow-hidden ">
     <img data-action="choisi" data-id="${contrecarte.name}" src="${contrecarte.img}" alt="${contrecarte.name} class="w-full h-full object-cover">
      </div>
      </div>
       `;
     
     console.log("contrecarte",contrecarte);}














