// ocultar/mostrar senha formulário auth e login

const btnShowPassword = document.querySelector("#showPassword")
const inputsPassword = document.querySelectorAll('input[type = "password"')

btnShowPassword.addEventListener("change", ()=>{
    inputsPassword.forEach(input=>{
        input.type = btnShowPassword.checked ? 'text' : 'password';
    })
})


//LOGIN
const btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", async () => {
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    // Validações
    if (!email || !password) {
        alert("Preencha todos os campos.");
        return;
    }

    // Anti-XSS
    const sanitize = (str) => str.replace(/[<>]/g, "");

    const payload = {
        email: sanitize(email),
        password: password
    };

    try {
        const response = await fetch("https://glammis.onrender.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login realizado com sucesso!");

            // opcional: salvar o usuário no localStorage
            localStorage.setItem("user", JSON.stringify(data.user));

            // redirecionar
            window.location.href = "/dashboard.html";
        } else {
            alert(data.message || "Erro ao fazer login.");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao conectar ao servidor.");
    }
});