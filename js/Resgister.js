function son() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const nhap = document.getElementById("nhap");
    const passworded = document.getElementById("passworded");
    const dangnhap = document.getElementById("dangnhap");
    nhap.addEventListener("click", async () => {
        const d = await getAll(URL_accounts);
        const v = d.find(p => p.email == email.value);
        if(v) {
            alert("gmail đã được sử dụng");
            return;
        }
        if (password.value != passworded.value) {
            alert("Mật khẩu không trùng khớp");
            return;
        };
        
        const newAccount = {
            name : name.value,
            email : email.value,
            password : password.value
        };
        add(URL_accounts,newAccount);
        location.href = "Login.html";
        
    });
    dangnhap.addEventListener("click", () => location.href = "Login.html");
}
son()