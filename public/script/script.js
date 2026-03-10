//==================HEADER=====================================
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



//======================PLANOS===================================
const btnPeriodPlanos = document.querySelector(".btn-select-period")
const deslizante = document.querySelector(".deslizante")
const textMensal = document.querySelector(".textMensal")
const textAnual = document.querySelector(".textAnual")
const descMensalAnual = document.querySelector("#descMensalAnual")
const valuePro = document.querySelector(".valuePro")

btnPeriodPlanos.addEventListener("click", ()=>{

    if(deslizante.classList.contains("anual-deslizante")){

        valuePro.innerText = ""
        valuePro.innerText = "R$ 24,90"

        descMensalAnual.innerText = ""
        descMensalAnual.innerText = "/Mês"

        deslizante.classList.remove("anual-deslizante")
        deslizante.classList.add("mensal-deslizante")

        textAnual.classList.remove("textAnual-active")
        textMensal.classList.add("textMensal-active")
        

    } else {
        valuePro.innerText = ""
        valuePro.innerText = "R$ 239,90"

        descMensalAnual.innerText = ""
        descMensalAnual.innerText = "/Ano"

        deslizante.classList.add("anual-deslizante")
        deslizante.classList.remove("mensal-deslizante")

        textAnual.classList.add("textAnual-active")
        textMensal.classList.remove("textMensal-active")

    }
})