// ajouter un pseudo

import { saveplayers, getplayers } from "./storage.js";



export let arr=[];
 const  regexadd=/^[A-Za-z0-9]{3,15}$/ ;
 export function ajouterplayer(nickname, choix){
    
   
// -----------------premiére-----------------------------------

    // nom redoublet + validation 


     if(!regexadd.test(nickname)){return"invalide"};
      

 const exist=arr.some((profile)=>{

     return nickname.toLowerCase()===profile.pseudo.toLowerCase();});

 if (exist){
        return "existe";
    }

 if(choix===""){
       
        return"terminé";
    }
        
        
        const player={
        id: Date.now(),
        pseudo:nickname,
        avatar:choix,
        date:new Date()
    };

    
  
    arr.push(player);
    saveplayers(arr);

    return "success";}


// --------------------Supprimer----------------------------

export function supprimer(id){
    arr=arr.filter((profile)=>profile.id!=id);}
    






// ------------------Modification-------------------------

    export function modification(nouveaux){
    const  regexadd=/^[A-Za-z0-9]{3,15}$/ ;

   const play=arr.find((profile)=>profile.id===Number(nouveaux));
    if(!play)return;

       const Anouveaux=prompt("Entrer le nouveau pseudo:");

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
          return nickname}
         
      
  

// ---------------------------selecter------------------------




 export function selecter(arr,choose){
  const select=arr.find((player)=> {return player.id==choose;});
return select;} 
 // choose is a string id is a number




