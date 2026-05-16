const buttons = document.querySelectorAll("[data-url]")
const articles = document.querySelectorAll(".articleSupport")

buttons.forEach(button => {

    button.addEventListener("click", ()=>{

        const url = button.dataset.url

        history.pushState({}, "", url)

        // REMOVE ACTIVE DOS OUTROS
        buttons.forEach(btn => {
            btn.classList.remove("activedItemMenu")
        })

        // ADICIONA ACTIVE NO BOTÃO CLICADO
        button.classList.add("activedItemMenu")

        articles.forEach(article => {
            article.classList.add("hidden")
        })

        const id = url.split("/").pop()

        document
            .getElementById(id)
            .classList.remove("hidden")

    })

})

//menu lateral responsivo
const btnMenuSideBar = document.querySelector(".btnMenuSideBar")
const menuSideBar = document.querySelector(".sidebar-support")

btnMenuSideBar.addEventListener("click", ()=>{
    if(menuSideBar.classList.contains("activedSideBar")){
        menuSideBar.classList.remove("activedSideBar")
        menuSideBar.classList.add("inactivedSideBar")
        menuSideBar.style.transition = "0.3s"
    } else if (menuSideBar.classList.contains("inactivedSideBar")){
        menuSideBar.classList.remove("inactivedSideBar")
        menuSideBar.classList.add("activedSideBar")
        menuSideBar.style.transition = "0.3s"
    }

})