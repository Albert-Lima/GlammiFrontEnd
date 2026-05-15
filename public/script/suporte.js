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