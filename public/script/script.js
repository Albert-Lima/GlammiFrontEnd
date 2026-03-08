const navMain = document.querySelector(".nav-main")
const btnMenu = document.querySelector("#btnMenu")
const navigate = document.querySelector(".navigate")

btnMenu.addEventListener("click", ()=>{

    if(navigate.classList.contains("inactive-link-menu")){

        navMain.classList.remove("inactive-menu")
        navMain.classList.add("active-menu")

        navigate.classList.remove("inactive-link-menu")
        navigate.classList.add("active-link-menu")

    } else if(navigate.classList.contains("active-link-menu")){

        navMain.classList.remove("active-menu")
        navMain.classList.add("inactive-menu")

        navigate.classList.remove("active-link-menu")
        navigate.classList.add("inactive-link-menu")

    }
    
})