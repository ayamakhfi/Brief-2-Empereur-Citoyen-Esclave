// --------------game--------------------

// ---------------------Afficher--------------------------
 export function afficheprofile(arr){

const afficher=document.getElementById("afficher");

   
   
   afficher.innerHTML="";
   arr.forEach((profile)=>{
       const carte=document.createElement("article");
       carte.className='flex flex-col bg-emperur-fonds rounded-lg hover:shadow-lg  hover:shadow-emperur-panneaux  p-6  w-48'
       carte.innerHTML=` <div class="flex w-full justify-between items-center">
        <span data-action="modifier" data-id="${profile.id}" class=" cursor-pointer text-lg px-0 hover:text-red-500">...</span>
        <span  data-action="supprimer" data-id="${profile.id}" class="cursor-pointer text-lg px-0 hover:text-red-500">✕</span>
        </div>
        <div class="flex flex-col w-full items-center justify-center">
        <img src="${profile.avatar}"  alt="${profile.pseudo}" class="h-[50px]">
        <p class="nom font-semibold text-lg">${profile.pseudo}</p>
        <p class="partie font-medium text-lg">${profile.play||0}0Partie</p>
        <button type="button" data-action="selecter" data-id="${profile.id}">Selecte</button>
        </div>`; 
        
        afficher.appendChild(carte);
    });
   
    
}
