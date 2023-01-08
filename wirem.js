
//code shortning
function modes(element){
    if(element=="products"){
        document.getElementById("products").classList.remove("hide");
    document.getElementById("products01").classList.add("hide");       
    }
    else{
       
    document.getElementById("products").classList.add("hide");
    document.getElementById("products01").classList.remove("hide");
    }
   
}

function backChange(element){
    if(element=="cctv"){
        document.getElementById("lands").classList.add("cctv");
        document.getElementById("lands").classList.remove("door");
        document.getElementById("lands").classList.remove("elect");
        document.getElementById("lands").classList.remove("scan");
        document.getElementById("lands").classList.remove("telephone");
        document.getElementById("lands").classList.remove("wifi");
    }
    else if (element=="door"){
        document.getElementById("lands").classList.add("door");
        document.getElementById("lands").classList.remove("cctv");
        document.getElementById("lands").classList.remove("elect");
        document.getElementById("lands").classList.remove("scan");
        document.getElementById("lands").classList.remove("telephone");
        document.getElementById("lands").classList.remove("wifi");
        
    }
    else if (element=="electric"){
        document.getElementById("lands").classList.add("elect");
        document.getElementById("lands").classList.remove("door");
        document.getElementById("lands").classList.remove("cctv");
        document.getElementById("lands").classList.remove("scan");
        document.getElementById("lands").classList.remove("telephone");
        document.getElementById("lands").classList.remove("wifi");
    }
    else if (element=="scan"){
        document.getElementById("lands").classList.add("scan");
        document.getElementById("lands").classList.remove("door");
        document.getElementById("lands").classList.remove("elect");
        document.getElementById("lands").classList.remove("cctv");
        document.getElementById("lands").classList.remove("telephone");
        document.getElementById("lands").classList.remove("wifi");
    }
    else if (element=="telephone"){
        document.getElementById("lands").classList.add("telephone");
        document.getElementById("lands").classList.remove("door");
        document.getElementById("lands").classList.remove("elect");
        document.getElementById("lands").classList.remove("scan");
        document.getElementById("lands").classList.remove("cctv");
        document.getElementById("lands").classList.remove("wifi");
    }
    else if (element=="wifi"){
        document.getElementById("lands").classList.add("wifi");
        document.getElementById("lands").classList.remove("door");
        document.getElementById("lands").classList.remove("elect");
        document.getElementById("lands").classList.remove("scan");
        document.getElementById("lands").classList.remove("telephone");
        document.getElementById("lands").classList.remove("cctv");
    }
    else if(element=="original"){
        document.getElementById("lands").classList.remove("scan");
        document.getElementById("lands").classList.remove("door");
        document.getElementById("lands").classList.remove("elect");
        document.getElementById("lands").classList.remove("cctv");
        document.getElementById("lands").classList.remove("telephone");
        document.getElementById("lands").classList.remove("wifi");
    }
}