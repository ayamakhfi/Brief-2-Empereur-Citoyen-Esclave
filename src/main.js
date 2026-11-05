
import { mainjoueur, mainordnateur ,duel ,changercamp ,newManche, mettreAjour} from "./game.js";
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
 <div class=" back-face border-2 border-amber-600 bg-emperur-cartes rounded-lg h-[165px] w-[110px] shrink-0 flex items-center  ">
         <img src="image/logo.png" alt="logo" class="carte">
     </div>

    
      <div class="front-face border-2 border-amber-600 rounded-lg h-[165px] w-[110px] relative">
     <img data-action="choisi" data-id="${cartev.name}" src="${cartev.img}" alt="${cartev.name}">
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
let groupe=1;





// ---------------------------duel-----------------
function jouer(){

  // ---------spread----------
let nouvelleMainjoueur=[...mainjoueur];
let nouvelleMainordinateur=[...mainordnateur];


 console.log("v",nouvelleMainjoueur);

      let result=duel(cartev,contrecarte);
          if(result==="Victoir"){
                  if(cartev.name==="empereur"){
                       scorejoueur+=1;
                                      }

                else if(cartev.name==="Esclave"){
                       scorejoueur+=5;
                                    }

                else{scorejoueur+=1;}
                                       }

            else if(result==="défaite"){
                 if(contrecarte.name==="empereur"){
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
                 
                 console.log(cartev);
                 console.log(result);
                return;  
}

 votrescore.textContent=scorejoueur;
 ordscore.textContent=scoreOrdinateur;




// -----------manches--------------------
if(cartev.name==="Empereur"|| cartev.name==="Esclave"
    || contrecarte.name==="Empereur"|| contrecarte.name==="Esclave"){
        newManche(manche);
          manche++;

// console.log("Joueur :", mainjoueur.length);
// console.log("Ordinateur :", mainordnateur.length);

affichercartesjoueur(mainjoueur);
affichercartesOrd(mainordnateur);
        
        manchenb.textContent=manche;
}
        // if(manche>12){
          
        // }
    }

  
// }


const manchenb=document.getElementById("monche");
const votrescore=document.getElementById("votrescore");
const ordscore=document.getElementById("ordscore");



