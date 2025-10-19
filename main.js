function contohvariabel() {
    let nama = "Gia Berlian Carmana";
    const umur = 19;
    var aktif = true;
    alert(`nama : ${nama}\n umur : ${umur}\n aktif : ${aktif}`);
}
function cekNilai() {
    const nilai = prompt("masukan nilai bebas : ");
    if (nilai >= 75) {
        alert("lulus rata-rata");
    } else {
        alert("gak lulus kocag");
    }
    alert("terima kasih");
}
function tampilarray() {
    const buah = ["cherry", "jeruk", "apel", "banana"];
    alert("daftar nama buah \n" + buah.join(","));
    console.log(buah);
}
function tambahhitung() {
    const a = parseInt(prompt("masukan nilai pertama: "));
    const b = parseInt(prompt("masukan nilai kedua: "));
    const hasil = a + b;
    alert(`hasilnya ${hasil}`);
}

const box = document.getElementById("kotak");
const btn = document.getElementById("gerak");
btn.addEventListener("click", () => {
    box.classList.toggle("translate-x-40");
    box.classList.toggle("bg-pink-500");
});

let count = 0;
const tampil = document.getElementById("count");
document.getElementById("plus").onclick = () => tampil.innerText = ++count;
document.getElementById("minus").onclick = () => tampil.innerText = --count;
