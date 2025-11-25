const btnSend = document.querySelector("#sendEmail")

btnSend.addEventListener("click", async ()=>{
    const email = document.querySelector("#emailInput").value
    const res = await fetch("https://glammis.onrender.com/auth/code-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ email })
    })

    const data = await res.json()

    if(data.redirect) {
        alert("email enviado!!")
        window.location.href = data.redirect
    }

    if(res.ok) {
        console.log("email enviado!!")
    } else {
        console.log("erro ao enviar email de recuperação de senha")
    }
})