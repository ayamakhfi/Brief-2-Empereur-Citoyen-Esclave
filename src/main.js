// ----------------écouteur de régle--------------------
const button=document.getElementById("seen");
const regle=document.getElementById("régle");
button.addEventListener("click",()=>{
  regle.classList.remove("hidden");
});


import { afficheprofile } from "./ui.js";
import {supprimer , modification, arr, ajouterplayer, selecter}from"./players.js"; 
// ------------------supprimer--------------------
afficher.addEventListener("click",(e)=>{
    const button=e.target.closest('[data-action="supprimer"]');
   

    if(!button)return;

    
      var sure=confirm("Etes-vous sur de vouloir supprimer ce profile")
    if(sure){
  
        const id=button.dataset.id;
        supprimer(id);
}
    

afficheprofile(arr);
});


// ------------------------modifié------------------------
afficher.addEventListener('click',(e)=>{
     console.log("click detected")

    const button=e.target.closest('[data-action="modifier"]');
    if(!button)return;
    e.stopPropagation();
    const nouveaux=button.dataset.id;
    
    modification(nouveaux ) ;
          
   
     console.log("modification executed");
   
    afficheprofile(arr);
});

// ----------------------------------------



// -----------------ajouter---------------

function addplayer(){
    const form=document.getElementById("pseudo");
    const inputname=form.querySelector('[name="pseudo"]');
    const messagename=inputname.parentElement.querySelector(".error-message ");
  const  regexadd=/^[A-Za-z0-9]{3,15}$/ ;
   
// -----------------premiére-----------------------------------
  

  inputname.addEventListener("input",()=>{

   
    const nickname=inputname.value.trim();
      

    inputname.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
    messagename.classList.remove("text-red-500","text-green-500");


    // nom redoublet + validation 

    if(nickname===""){
        messagename.textContent="";
    }

      else if(!regexadd.test(nickname)){
        inputname.classList.add("border-red-500");
        inputname.classList.add("text-red-500");
        messagename.textContent="Forme invalide";
        messagename.classList.add("text-red-500");
       

    }

     else{
        inputname.classList.add("border-green-500");
        inputname.classList.add("text-green-500");
        messagename.textContent="Forme valide";
        messagename.classList.add("text-green-500");
    }
  });


 const avatars=form.querySelector('#avatar');
const messageavatar=avatars.parentElement.querySelector(".error-message");
 let choix="";
 
//  ---------------------------------second----------------------------


avatars.addEventListener('click',(e)=>{
  const img=e.target.closest('[data-avatar]') ;
  if (!img)return;

   choix=img.dataset.avatar;
   if(choix){
    messageavatar.classList.add("text-green-500");
   messageavatar.textContent="avatar a été choisi"}

   console.log(choix);});




// ----------------------------------troisième-----------------------

form.addEventListener('submit',(e)=>{

    e.preventDefault();


  const nickname=inputname.value.trim();
 
    const result= ajouterplayer(nickname, choix);

    if (result==="invalide")return;

   if (result==="existe"){
         messagename.textContent="";
        messagename.textContent="ce pseudo est déjà utiliser";
        inputname.classList.remove("border-green-500");
        inputname.classList.remove("text-green-500");

        inputname.classList.add("border-red-500");
        messagename.classList.add("text-red-500");
        return;
    } 


    if(result==="terminé"){
        alert("choisez un avatar")
        return;
    }
        
        
     if(result==="success"){
   
    
    afficheprofile(arr);
   


    form.reset();
    choix="";
    inputname.classList.remove("text-green-500");
    messageavatar.textContent="";
    messagename.textContent="";}

});




}  addplayer();

// -----------------------select-------------------
const playerheader=document.getElementById("profileHeader");

afficher.addEventListener("click",(e)=>{
  const button=e.target.closest('[data-action="selecter"]');
  if(!button)return;
  const choose=button.dataset.id;
   const result=selecter(arr,choose);
  if(!result)return;
  playerheader.innerHTML=`

  <img src="${result.avatar}" alt="avatar"class="h-[30px] w-[30px] rounded-full">
  </p>${result.pseudo}<p>`;

  console.log( "aaa",playerheader);
});

