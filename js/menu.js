const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");

//console.log(menu);
//console.log(menuNav);

/*Acá dice que si menuNav posee la clase spread se la quite, pero que 
si no la tiene se la dé de esta manera aparece el menuNav*/
menu.addEventListener("click", () => {
    menuNav.classList.toggle("spread");
})

/*e.target indica que esta usted señalando dentro del DOM(?) por lo que 
aca dice si el menuNav tiene la clase spread y se esta señalando algo
diferente a menuNav y menu, entonces se quitara la clase spread a 
menuNav y este desaparecera */
window.addEventListener("click", e => {
    if (menuNav.classList.contains("spread")
        && e.target != menuNav && e.target != menu) {
        menuNav.classList.toggle("spread");
    }
})