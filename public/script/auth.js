// ocultar/mostrar senha formulário auth e login

const btnShowPassword = document.querySelector("#showPassword")
const inputsPassword = document.querySelectorAll('input[type = "password"')

btnShowPassword.addEventListener("change", ()=>{
    inputsPassword.forEach(input=>{
        input.type = btnShowPassword.checked ? 'text' : 'password';
    })
})


//CADASTRO
const btnRegister = document.querySelector("#btnRegister")

btnRegister.addEventListener("click", async()=>{
    const name = document.querySelector("#name").value.trim()
    const email = document.querySelector("#email").value.trim()
    const password = document.querySelector("#password").value.trim()
    const confirmPassword = document.querySelector("#confirmPassword").value.trim()
    const accepted = document.querySelector("#polytics").checked

    //validações básicas
    if(!name || !email || !password || !confirmPassword) {
        alert("preencha os campos.");
        return
    }

    if(!accepted) {
        alert("Você deve aceitar os termos.")
    }

    if(password !== confirmPassword) {
        alert("As senhas não coincidem.")
        return
    }

    if(password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.")
        return
    }

    //Anti-XSS
    const sanitize = (str) => str.replace(/[<>]/g, "")

    const payload = {
        name: sanitize(name),
        email: sanitize(email),
        password: password
    }
    console.log(payload)

    try {
        const response = await fetch("https://glammis.onrender.com/auth/register", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(payload)
        })

        const data = await response.json()

        if(response.ok) {
            alert("Conta criada com sucesso!")
            window.location.href = "/verify.html"
        } else{
            alert(data.error || "Erro ao criar conta.")
        }
    } catch (error) {
        console.error("Erro:", error)
        alert("Erro ao conectar ao servidor. ")
    }
})
