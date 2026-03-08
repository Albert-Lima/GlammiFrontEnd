const navMain = document.querySelector(".nav-main")
const btnMenu = document.querySelector("#btnMenu")
const imgButtonMenu = document.querySelector(".imgButtonMenu")
const navigate = document.querySelector(".navigate")

btnMenu.addEventListener("click", ()=>{

    if(navigate.classList.contains("inactive-link-menu")){

        btnMenu.style.position = "absolute"
        btnMenu.style.right = "10px"
        btnMenu.style.top = "10px"

        imgButtonMenu.src = ""
        imgButtonMenu.src = "public/img/icons8-close-64.png"

        navMain.classList.remove("inactive-menu")
        navMain.classList.add("active-menu")

        navigate.classList.remove("inactive-link-menu")
        navigate.classList.add("active-link-menu")

    } else if(navigate.classList.contains("active-link-menu")){

        btnMenu.removeAttribute("style")

        imgButtonMenu.src = ""
        imgButtonMenu.src = "public/img/icons8-menu-64.png"

        navMain.classList.remove("active-menu")
        navMain.classList.add("inactive-menu")

        navigate.classList.remove("active-link-menu")
        navigate.classList.add("inactive-link-menu")

    }
    
})