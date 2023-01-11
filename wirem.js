
//code shortning
function backChange(element){
    document.getElementById("lands").classList.add(`${element}`);
}
function backChangeDel(element){
    document.getElementById("lands").classList.remove(`${element}`);
}


function backChanges(entity){
   
}


function modes(element) {
    if (element == "products") {
        document.getElementById("products").classList.remove("hide");
        document.getElementById("products01").classList.add("hide");
    }
    else {

        document.getElementById("products").classList.add("hide");
        document.getElementById("products01").classList.remove("hide");
    }

};

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
