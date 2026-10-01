const kl = document.getElementById("kl");
const email = document.getElementById("email");
const password = document.getElementById("password");
const dangky = document.getElementById("dangky");
kl.addEventListener("click", async () => {
    const accounts = await getAll(URL_accounts);
    const hello = accounts.find(p => p.password == password.value && p.email == email.value);
    if (!hello) {
        alert("Ban nhap sai email hoac mat khau");
        return;
    }
    location.href = "Home.html";
});
dangky.addEventListener("click", () => location.href = "Resgister.html")