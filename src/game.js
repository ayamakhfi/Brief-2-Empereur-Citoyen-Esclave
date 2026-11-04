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

function duel(){

    if (cartejoueur==="Empreur" && carteordinateur==="citoyen"){
      console.log("Vectoir a Empreur");
      
    }

    else if (cartejoueur==="Citoyen" && carteordinateur==="Citoyen"){
       console.log ("Egalité");}

    else if (cartejoueur==="Citoyen" && carteordinateur==="Esclave"){
       console.log("Vectoir a Citoyen");}
      
    
    else{ console.log("victoir a l'esclave");}
       

    if(i%3===0){
        let a=mainjoueur;
        mainjoueur=mainordnateur;
        mainordnateur=a;
    }

}


