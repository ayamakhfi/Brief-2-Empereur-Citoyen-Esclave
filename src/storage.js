
export function saveplayers(arr){
    localStorage.setItem("player",JSON.stringify(arr));
}

export function getplayers(){
    return JSON.parse(localStorage.getItem("player"))|| [];
}