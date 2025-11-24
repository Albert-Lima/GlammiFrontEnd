const email = new URLSearchParams(window.location.search).get("email") // pega o email da URL

document.querySelector("#emailSpan").textContent = email

//botão verificar
const btnVerify = document.querySelector("#btnVerify")

btnVerify.addEventListener("click", async ()=>{
    const code = document.querySelector("#codeInput").value

    const res = await fetch("http://localhost:8081/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ email, code})
    })

    const data = await res.json()

    if( res.ok) {
        alert("Verificado com sucesso!")
        window.location.href = "/dashboard.html"
    } else {
        alert(data.message)
    }
})

//cronômetro de 30s para pedir reenvio de código
let seconds = 30
const timerEl = document.querySelector("#timer")
const resendBtn = document.querySelector("#btnResend")

const interval = setInterval(()=>{
    seconds--
    timerEl.textContent = seconds

    if (seconds <= 0) {
        clearInterval(interval)
        resendBtn.classList.replace( "inative-resend", "active-resend")
    }
}, 1000)

//Reenviar código
resendBtn.addEventListener("click", async ()=>{
    const res = await fetch("http://localhost:8081/auth/resend-code", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email})
    })

    const data = await res.json()

    if(data.redirect){
        window.location.href = data.redirect
    }

    alert(data.message)
    resendBtn.classList.replace( "active-resend", "inative-resend")
})
