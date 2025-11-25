const email = new URLSearchParams(window.location.search).get("email");

document.querySelector("#sendResetCode").addEventListener("click", async () => {
    const code = document.querySelector("#codeResetInput").value;

    const res = await fetch("https://glammis.onrender.com/auth/validate-reset", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, code })
    });

    const data = await res.json();

    if (data.redirect) {
        window.location.href = data.redirect;
        return;
    }

    alert(data.message);
});