
// ----------------------tableau des cartes--------------


 const votrecarte=document.querySelector(".votrecarte");
 const randcarte=document.querySelector(".randcarte");

export let mainjoueur=[{name:"Empereur", img:"image/Empereur.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}];


export let mainordnateur=[{name:"Esclave",img:"image/Esclave.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}];


    // -----------régle de jeu------------------------
export function duel(cartejoueur,carteordinateur){
     console.log("cartejoueur",cartejoueur);
     console.log("carteordinateur",carteordinateur);

    if (cartejoueur.name==="Empereur" && carteordinateur.name==="Citoyen"){
      return"Victoir";
    
    }
   

    else if (cartejoueur.name==="Citoyen" && carteordinateur.name==="Citoyen"){
      return "Egalité";}

    else if (cartejoueur.name==="Citoyen" && carteordinateur.name==="Esclave"){
       return "Victoir";}
    
    else if (cartejoueur.name==="Esclave"&& carteordinateur.name==="Empereur")
    {return "Victoir";}
    
    else{ return "défaite";}

}




// -------------------------changer------------------------




export function newManche(manche){
    if(manche<3|| (manche>5 && manche<9) ){ 
     mainjoueur=[{name:"Empereur", img:"image/Empereur.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}];

      mainordnateur=[{name:"Esclave",img:"image/Esclave.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}];

   }

    else{  mainjoueur=[{name:"Esclave",img:"image/Esclave.png"},
       {name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}];
    

        mainordnateur=[{name:"Empereur", img:"image/Empereur.png"},
       {name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}
    ,{name:"Citoyen", img:"image/Citoyen.png"}];}

         votrecarte.innerHTML="";
    randcarte.innerHTML="";

}

// ----------------------mettre a jour-----------------

export function mettreAjour(joueur,ordinateur){
    mainjoueur=joueur;
    mainordnateur=ordinateur;
}







