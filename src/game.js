
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
    {return "victoir";}
    
    else{ return "défaite";}

}




// -------------------------changer------------------------
    export function changercamp(){
        mainjoueur=[{name:"Esclave",img:"image/Esclave.png"},
       ... mainjoueur.slice(1)
        ];

        mainordnateur=[{name:"Empereur", img:"image/Empereur.png"},
            ...mainordnateur.slice(1)
        ];
    }



// export function newManche(){
//      mainjoueur=[{name:"Empereur", img:"image/Empereur.png"}
//     ,{name:"Citoyen", img:"image/Citoyen.png"}
//     ,{name:"Citoyen", img:"image/Citoyen.png"}
//     ,{name:"Citoyen", img:"image/Citoyen.png"}
//     ,{name:"Citoyen", img:"image/Citoyen.png"}];

//       mainordnateur=[{name:"Esclave",img:"image/Esclave.png"}
//     ,{name:"Citoyen", img:"image/Citoyen.png"}
//     ,{name:"Citoyen", img:"image/Citoyen.png"}
//     ,{name:"Citoyen", img:"image/Citoyen.png"}
//     ,{name:"Citoyen", img:"image/Citoyen.png"}];

   

// }







