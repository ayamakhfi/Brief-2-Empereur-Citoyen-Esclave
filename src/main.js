// 




import { mainjoueur, mainordnateur } from "./game.js";
import{ cartechoisi} from"./ui.js";




const cartesj=document.getElementById("cartesjoueur")
// ---------------------------votre carte----------------------
const votrecarte=document.querySelector(".votrecarte");
cartesj.addEventListener("click",(e)=>{
  const img=e.target.closest('[data-action="choisi"]');
  const imgchoisi=img.dataset.id;
  const imgv=cartechoisi(imgchoisi);
 console.log(imgv)
 votrecarte.innerHTML=`<div class="carteflipped-votre relative perspective-[1000px]">
 <div class=" back-face border-2 border-amber-600 bg-emperur-cartes rounded-lg h-[165px] w-[110px] shrink-0 flex items-center  ">
         <img src="image/logo.png" alt="logo" class="carte">
     </div>

    
      <div class="front-face border-2 border-amber-600 rounded-lg h-[165px] w-[110px] relative">
     <img data-action="choisi" data-id="${imgv.name}" src="${imgv.img}" alt="${imgv.name}">
     </div>
      </div>`;
})

// -----------------------------rest le probléme de flip-----------------

 const randcarte=document.querySelector(".randcarte");
 
 const button=document.getElementById("start");
  button.addEventListener("click",()=>{
    console.log("flip");
   const ordinateur= randcarte.querySelector(".carteflipped-ORD");
    const vous=votrecarte.querySelector(".carteflipped-votre");
     ordinateur.classList.add("flip");
     vous.classList.add("flip");
    setTimeout(()=>{
      console.log("ord",ordinateur.className);
      console.log("vous",vous.className);}
      ,6000);

    });

