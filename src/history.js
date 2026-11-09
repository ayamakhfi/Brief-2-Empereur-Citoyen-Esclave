
import { gethistoriquejoueur ,historiquejoueur } from "./storage.js";

// ----------------------history--------------


export function enregistrerpartie(player, scorejoueur, scoreOrdinateur, resultat){
const history=gethistoriquejoueur();
 


// ----------------------array-------------------
const partie={
    id:"g-"+Date.now(),
    playerId:player.id,
    date:new Date().toISOString().slice(0, 16),
    playerScore:scorejoueur,
    computerScore:scoreOrdinateur,
    result: resultat
};
console.log(partie);
history.push(partie);
historiquejoueur(history);
}

// -------------------- filtre par date-------------------


// //--------------------------recherche les parties----------
// const inputpseudo=document.getElementById("search");
// const messageerreur=document.querySelector(".error-message");
// function rechercherpseudo(){
//     const nickname=inputpseudo.value.trim().toLowaeCase();

//     const trouver=arr.filter(player=>
//         player.pseudo.toLowaeCase().includes(nickname));

//     if(trouver.length===0){
//        messageerreur.textContent="joueur introuvable";
//        affichagehistoryque([],arr);
//        return;
//     }

//      messageerreur.textContent="";
//      const historiquefiltre=history.filter(partie=> trouver.some(player=> player.id=== partie.playerId));

//      affichagehistoryque(historiquefiltre,arr);}

//      inputpseudo.addEventListener("input",rechercherpseudo);

// }

import { arr } from "./players.js";

// ----------------affichage----------------
export function affichagehistoryque(history,arr){
const affichageH=document.getElementById("affichagehistoryque");

if(!affichageH) return;
affichageH.innerHTML="";
history.forEach(profile=>{

  const joueur=arr.find(player=> player.id===profile.playerId); 
  
  if(!joueur)return;

const carte=document.createElement("article");
carte.className="bg-emperur-navigation rounded-lg p-4 flex items-center gap-4";
carte.innerHTML=`<div id="historycarte" class="flex justify-between items-center w-full">
    <span data-action="supprimer" data-id=${profile.id}>x</span>
    <img src="${joueur.avatar}" alt="avatar">
    <h2>${joueur.pseudo}</h2>
    <p> score:</p><span>${profile.playerScore}</span>
    <p>result:</p><span>${profile.result}</span>
    </div>`;

affichageH.appendChild(carte);
});

if(history.length===0){
    affichageH.innerHTML="<p>Aucune partie enregistrée.</p>";
}
}



// ----------------------supprimer---------------------
const historycarte=document.getElementById("historycarte");
if(historycarte){
historycarte.addEventListener("click",(e)=>{
    const suppH=e.target.closest('[data-action="supprimer"]')
    if(!suppH)return;

  let Id= suppH.dataset.id;

  if (confirm("Voulez-vous vraiment supprimer cette partie ?")) {

  const Nouvellehistory=history.filter(profile=>profile.id!==Id);

  historiquejoueur(Nouvellehistory);

gethistoriquejoueur(Nouvellehistory);}
})
}



// ----------------------fix order-----------------
export function  rechercheETfilter(nickname,resultat,date,arr){
//------------------order--------------------
    let history= gethistoriquejoueur();
    history.sort((a,b)=> new Date(b.date)-new Date(a.date));
// ---------------recherche----------------
     history=history.filter(parties=> { const joueur= arr.find(player=>player.id===parties.playerId);

        return joueur && joueur.pseudo.toLowerCase().includes(nickname.toLowerCase());
});

//---------------------filter par result---------------------
if(resultat !== "toutes"){
    history=history.filter(partie=> partie.result===resultat)
}

// ------------------filter date----------------
let time=new Date();
if (date === "today"){
    history=history.filter(partie=>{
        return new Date(partie.date).toDateString() === time.toDateString();
    });
}

else if ( date === "hier"){
    const hier=new Date();
    hier.setDate( time.getDate()-1);

    history=history.filter(partie =>{
        return new Date(partie.date).toDateString()===hier.toDateString();
    });
}

else if(date === "semaine"){
    const week=new Date();
    week.setDate(time.getDate()-7);

    history=history.filter(partie=>
    {return new Date(partie.date) >= week;}
    );
}

return history;}