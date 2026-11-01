// ajouter un pseudo
let arr=[];

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
 
    const exist=arr.some((profile)=>{

     return nickname.toLowerCase()===profile.pseudo.toLowerCase();});
    console.log(arr);
    console.log(nickname);
    console.log(exist);

    if(!regexadd.test(nickname)){
        
        return;}


   if (exist){
         messagename.textContent="";
        messagename.textContent="ce pseudo est déjà utiliser";
        inputname.classList.remove("border-green-500");
        inputname.classList.remove("text-green-500");

        inputname.classList.add("border-red-500");
        messagename.classList.add("text-red-500");
        return;
    } 


    if(choix===""){
        alert("choisez un avatar")
        return;
    }
        
        
        let player={
        id: Date.now(),
        pseudo:inputname.value,
        avatar:choix,
        date:new Date()
    };

    
  
    arr.push(player);
    console.log(arr);

    afficheprofile(arr);
   


    form.reset();
    choix="";
    inputname.classList.remove("text-green-500");
    messageavatar.textContent="";
    messagename.textContent="";

});



}  addplayer();

// ---------------------Afficher--------------------------
function afficheprofile(){

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
        </div>`; 
        
        afficher.appendChild(carte);
    });
   
    
}


// ------------------Modification-------------------------

// --------------------Supprimer----------------------------

afficher.addEventListener("click",(e)=>{
    const button=e.target.closest('[data-action="supprimer"]');
    if(!button)return;
    const id=button.dataset.id;
    arr=arr.filter((profile)=>profile.id!=id);

afficheprofile();
});

afficher.addEventListener('click',(e)=>{
     console.log("click detected")

    const button=e.target.closest('[data-action="modifier"]');
    if(!button)return;
    e.stopPropagation();
    const nouveaux=button.dataset.id;
     const  regexadd=/^[A-Za-z0-9]{3,15}$/ ;
   const play=arr.find((profile)=>profile.id===Number(nouveaux));
    if(!play)return;

       const Anouveaux=prompt("Entrer le nouveau pseudo:",play.pseudo);
         if(Anouveaux===null)return;

         const nickname=Anouveaux.trim();

         if(!regexadd.test(nickname)){
            alert("pseudo invalide");
            return;
         }
         
         const exist=arr.some((profile)=>
          profile.id!==play.id && nickname.toLowerCase()===profile.pseudo.toLowerCase() );
       

           if(exist){
                alert("ce pseudo est déjà exicte");return}

           play.pseudo=nickname ;
         
      
     console.log("play",play);
     console.log("modification executed");
   
    afficheprofile();
});


afficheprofile();

// -----------afficher les régles-----------

const button=document.getElementById("seen");
const regle=document.getElementById("régle");
button.addEventListener("click",()=>{
  regle.classList.remove("hidden");
});