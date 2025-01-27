is_nav_none = 1;
function show_nav() {
    let x = document.querySelector("header ul");
    if(is_nav_none) {
        x.style.display = "flex";
        is_nav_none = 0;
    }
    else {
        x.style.display = "none";
        is_nav_none = 1;
    }
}
window.onscroll =  () => {
    if(window.scrollY > 50 ) {
        document.querySelector("#header").style.background_color = "red";
    }
    // else {
    //     document.querySelector("#mainNavBar").classList.remove("navbarDown");
    // }
};
