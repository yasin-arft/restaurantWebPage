

// globals


// onload handler
window.onload = () => {
    main();
}

// main function

function main () {

    //variables
    const navBar = document.getElementById("nav-bar");
    const aboutSection = document.getElementById("about");
    let aboutOffSet = aboutSection.offsetTop;
    const openMenuBtn = document.getElementById("open-menu-btn");
    const closMenuBtn = document.getElementById("close-menu-btn");
    const mobileMenuContent = document.getElementById("mobile-menu-content");
    const mobileMenuItem = document.querySelectorAll(".mobile-menu-content a");
    
    //event listeners
    window.addEventListener("scroll", stickyNavHandler(aboutOffSet, navBar, aboutSection));
    openMenuBtn.addEventListener("click", function() {
        mobileMenuContent.style.left = "0";
    });
    closMenuBtn.addEventListener("click", function(){
        mobileMenuContent.style.left = "-100%";
    })
    mobileMenuItem.forEach(function(e) {
        e.addEventListener("click", function() {
            mobileMenuContent.style.left = "-100%";
        })
    });
}

// event handler

function stickyNavHandler(aboutOffSet, navBar, aboutSection){
    return function() {
        if(window.scrollY >= aboutOffSet) {
            navBar.classList.add("sticky");
            aboutSection.style.marginTop = "71px";
        } else {
            navBar.classList.remove("sticky");
            aboutSection.style.marginTop = "0";
        }
    }
    
}