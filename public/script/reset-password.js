// ocultar/mostrar senha formulário auth e login

const btnShowPassword = document.querySelector("#showPassword")
const inputsPassword = document.querySelectorAll('input[type = "password"')

btnShowPassword.addEventListener("change", ()=>{
    inputsPassword.forEach(input=>{
        input.type = btnShowPassword.checked ? 'text' : 'password';
    })
})

// pegar email da URL
const email = new URLSearchParams(window.location.search).get("email");
const code = new URLSearchParams(window.location.search).get("code");

if(!email){
    alert("Email não encontrado. Volte para o início.");
    window.location.href = "/reset.html";
}

const btn = document.getElementById("btnReset");

btn.addEventListener("click", async () => {
    const pass = document.getElementById("passwordInput").value;
    const confirm = document.getElementById("confirmPasswordInput").value;

    if(pass !== confirm){
        alert("As senhas não coincidem!");
        return;
    }

    const res = await fetch("http://localhost:8081/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ email,code, newPassword: pass })
    });

    const data = await res.json();

    if(res.ok){
        alert("Senha alterada com sucesso!");
        window.location.href = "/login.html";
    } else {
        alert(data.message || "Erro ao alterar senha.");
    }
});