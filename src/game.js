// -----------régle de jeu------------------------
// ----------------------tableau des cartes--------------


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

export function duel(cartejoueur,carteordinateur){

    if (cartejoueur==="Empreur" && carteordinateur==="citoyen"){
      return"Victoir";
      
    }

    else if (cartejoueur==="Citoyen" && carteordinateur==="Citoyen"){
      return "Egalité";}

    else if (cartejoueur==="Citoyen" && carteordinateur==="Esclave"){
       return "Victoir";}
      
    
    else{ return "défaite";}

}






