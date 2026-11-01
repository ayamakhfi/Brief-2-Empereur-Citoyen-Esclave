// ajouter un pseudo

function addplayer(){
    const form=document.getElementById("pseudo");
    const inputname=form.querySelector('[name="pseudo"]');
    const messagename=inputname.parentElement.querySelector(".error-message ");
  const  regexadd=/^[A-Za-zà-ÿ0-9 .'-]{3,20}$/;
   let find=false;


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

// //   add a player
 
   


// });

const avatars=document.getElementById("avatar");
 let choix="";
 
avatars.addEventListener('click',(e)=>{
  const img=e.target.closest('[data-avatar]') ;
   choix=img.dataset.avatar;
   console.log(choix);});




const button=document.getElementById("ajouter");
let arr=[];
form.addEventListener('submit',(e)=>{
    e.preventDefault();


  const nickname=inputname.value.trim();


 arr.forEach((profile)=>{
   if (nickname.toLowerCase()===profile.pseudo.toLowerCase()){
         find=true;}
   } );

    if (find===true){
        messagename.textContent="ce pseudo est déjà utiliser";
        inputname.classList.add("border-red-500");
        messagename.classList.add("text-red-500");
        return;
    }


   if(!regexadd.test(nickname)){
        
        return;}

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

});
});
}  addplayer();


// ------------------Modification-------------------------

// --------------------Supprimer----------------------------

