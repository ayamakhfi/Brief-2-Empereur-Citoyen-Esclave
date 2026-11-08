
import { mainjoueur, mainordnateur ,duel  ,newManche, mettreAjour } from "./game.js";
import{ cartechoisi  ,affichercartesjoueur ,affichercartesOrd, choisiORDcarte ,ordinateurcarte} from"./ui.js";

// ---------------------------votre carte----------------------
let cartev=null;
let contrecarte=null;


const cartesj=document.getElementById("cartesjoueur");

export const votrecarte=document.querySelector(".votrecarte");


cartesj.addEventListener("click",(e)=>{
  const img=e.target.closest('[data-action="choisi"]');
   if (!img) return;
  const index=Number(img.dataset.index);
  console.log("index",index);
  cartev=mainjoueur[index];

 console.log("imgv",cartev)
 votrecarte.innerHTML=`<div class="carteflipped-votre relative perspective-[1000px]">
 <div class=" back-face border-2 border-amber-600 bg-emperur-cartes rounded-lg h-[140px] w-[95px] lg:h-[165px] lg:w-[110px]  shrink-0 flex items-center  ">
         <img src="image/logo.png" alt="logo" class="carte">
     </div>

    
      <div class="front-face border-2 border-amber-600 rounded-lg h-[140px] w-[95px] lg:h-[165px] lg:w-[110px]  relative overflow-hidden">
     <img data-action="choisi" data-id="${cartev.name}" src="${cartev.img}" alt="${cartev.name}" class="w-full h-full object-cover">
     </div>
      </div>`;

      setTimeout(()=>{
        contrecarte=choisiORDcarte();
        ordinateurcarte(contrecarte);
      ;}
      ,500);

    });






// -----------------------------rest le probléme de flip-----------------

 const randcarte=document.querySelector(".randcarte");

 const button=document.getElementById("start");
  button.addEventListener("click",()=>{
    console.log("flip");

   const ordinateur= randcarte.querySelector(".carteflipped-ORD");

    const vous=votrecarte.querySelector(".carteflipped-votre");

      if (!ordinateur || !vous) {
    console.log("Une des cartes est introuvable");
    return;
  }

     ordinateur.classList.add("flip");
     vous.classList.add("flip");
    setTimeout(()=>{
      jouer();}
      ,1500);

    });


    // ----------------------régle de jeu----------------


let scorejoueur=0;
let scoreOrdinateur=0;
let manche=1;
let count=1;





// ---------------------------duel-----------------
function jouer(){

  // ---------spread----------
let nouvelleMainjoueur=[...mainjoueur];
let nouvelleMainordinateur=[...mainordnateur];


 console.log("v",nouvelleMainjoueur);

      let result=duel(cartev,contrecarte);
          if(result==="Victoir"){
                  if(cartev.name==="Empereur"){
                       scorejoueur+=1;
                                      }

                else if(cartev.name==="Esclave"){
                       scorejoueur+=5;
                                    }

                else{scorejoueur+=1;}
                                       }

            else if(result==="défaite"){
                 if(contrecarte.name==="Empereur"){
                        scoreOrdinateur+=1;
                                           }

                  else if(contrecarte.name==="Esclave"){
                        scoreOrdinateur+=5;}

                 else{scoreOrdinateur+=1;}
                                           }


            else if (result==="Egalité"){
    // -----pour supprimer-------
              let a=nouvelleMainjoueur.indexOf(cartev);
              console.log(a);
                nouvelleMainjoueur.splice(a,1);
                  nouvelleMainordinateur.splice(nouvelleMainordinateur.indexOf(contrecarte),1)
                  console.log ("p",nouvelleMainjoueur);

  // -----nouvaux--------
                  affichercartesjoueur(nouvelleMainjoueur);
                  affichercartesOrd(nouvelleMainordinateur);

                 votrecarte.innerHTML="";
                 randcarte.innerHTML="";

                 cartev=null;
                 contrecarte=choisiORDcarte();
                 ordinateurcarte(contrecarte);

// -------------mettre a jour----------------

                 mettreAjour(nouvelleMainjoueur,nouvelleMainordinateur);
                 
                 console.log("cartev",cartev);
                 console.log(result);
                return;  
}

console.log("result",result)

 votrescore.textContent=scorejoueur;
 ordscore.textContent=scoreOrdinateur;





// -----------manches--------------------
if(cartev.name==="Empereur"|| cartev.name==="Esclave"
    || contrecarte.name==="Empereur"|| contrecarte.name==="Esclave"){
        newManche(manche);
          manche++;

// console.log("Joueur :", mainjoueur.length);
// console.log("Ordinateur :", mainordnateur.length);
// ----------------------------------modale-------------------------
  if(manche>12){
         modale.classList.remove("hidden");
         milieu.classList.add("hidden");
        
         }

          totalejoueur.textContent=scorejoueur;
         totaleORD.textContent=scoreOrdinateur;

affichercartesjoueur(mainjoueur);
affichercartesOrd(mainordnateur);
    }
        manchenb.textContent=manche;



//  ----------------------------echange de camp-------------------   
const camp=document.getElementById("Camp")
camp.textContent=mainjoueur[0].name;
console.log("camp",camp);


// ---------------------------------groupe---------------------------
const groupe=document.getElementById("groupe")

if (manche===4 || manche===7 ||manche===10 ){
    count++;
    groupe.textContent=`${count}/4`;
    groupesection.classList.remove("hidden");
    zonemilieu.classList.toggle("hidden");

    setTimeout(()=>{
      groupesection.classList.add("hidden");
      zonemilieu.classList.remove("hidden");
    },2000);

}

  
}


const manchenb=document.getElementById("monche");
const votrescore=document.getElementById("votrescore");
const ordscore=document.getElementById("ordscore");
const milieu=document.querySelector(".milieu");
const modale=document.getElementById("modale");
const totalejoueur=document.getElementById("totalejoueur");
const totaleORD=document.getElementById("totaleORD");

const zonemilieu=document.querySelector(".zone-milieu ");
const groupesection=document.querySelector(".groupesection");

const quitter=document.getElementById("quitter");
const rejouer=document.getElementById("Rejouer");

quitter.addEventListener("click",()=>{
  // ----revient a page d historique------
})






// ----------------------------rejouer----------------------------


rejouer.addEventListener("click",()=>{
  
  manche=1;
scorejoueur=0;
  scoreOrdinateur=0;
  count=1;

  cartev=null;
  contrecarte=null;

  newManche(1);
   manchenb.textContent=manche;
   groupe.textContent=`${count}/4`;

 votrescore.textContent=scoreOrdinateur;
  ordscore.textContent=scorejoueur;

  votrecarte.innerHTML="";
  randcarte.innerHTML="";
  
  modale.classList.add("hidden");
   milieu.classList.remove("hidden");

affichercartesjoueur(mainjoueur);
affichercartesOrd(mainordnateur);

})

