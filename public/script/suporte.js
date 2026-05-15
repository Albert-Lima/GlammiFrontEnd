const buttons = document.querySelectorAll("[data-url]")
const articles = document.querySelectorAll(".articleSupport")

buttons.forEach(button => {

    button.addEventListener("click", ()=>{

        const url = button.dataset.url

        history.pushState({}, "", url)

        articles.forEach(article => {
            article.classList.add("hidden")
        })

        const id = url.split("/").pop()

        document
            .getElementById(id)
            .classList.remove("hidden")

    })

})