
export function saveplayers(arr){
    localStorage.setItem("player",JSON.stringify(arr));
}

export function getplayers(){
    return JSON.parse(localStorage.getItem("player"))|| [];
}




// ---------------------------account------------------------
export function selectaccount(playeraccount){
    localStorage.setItem("playerheader" ,JSON.stringify(playeraccount))
}

export function getselectaccount(){
    return JSON.parse(localStorage.getItem("playerheader"));
}



// ---------------------------history----------------
export function historiquejoueur(history){
    localStorage.setItem("history",JSON.stringify(history));
}


export function gethistoriquejoueur(){
    return JSON.parse(localStorage.getItem("")) || [];
}