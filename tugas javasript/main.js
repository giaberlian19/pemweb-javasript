function validasi() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (nama === "" || email === "" || password === "") {
        alert("Semua kolom harus diisi!");
    }

    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!polaEmail.test(email)) {
        alert("Format email tidak valid! Contoh: nama@domain.com");
    }

    if (password.length < 8) {
        alert("Password harus minimal 8 karakter!");
    } else {
        alert("data diri berhasil dikirim")
    }

}