var pintu = {
    warna : "putih",
    berat : 450,
    tarikAtaudorong:function(tarik) {
      console.log("tarik atau dorong " + tarik)
    }
}
console.log(pintu)
console.log(pintu.tarikAtaudorong("untuk membuka atau menutup pintu" + '<br>'))

var buku = {
    warna : "merah",
    berat : 15,
    diBuka:function(tes) {
      console.log("dibuka untuk " + tes)
    }
}
console.log(buku)
console.log(buku.diBuka("dibaca"))

var botolMinum = {
    warna : "biru",
    berat : 50,
    bukaTutup:function(bt) {
      console.log("buka tutup botol untuk " + bt)
    }
}
console.log(botolMinum)
console.log(botolMinum.bukaTutup("meminum air"))

var baju = {
    warna : "hitam, putih",
    ukuran : "L",
    diPakai:function(pk) {
      console.log("pakai baju untuk " + pk)
    }
}
console.log(baju)
console.log(baju.diPakai("keluar rumah"))

var laptop = {
    warna : "silver",
    berat : 100,
    fungsi:function(fung) {
      console.log("tekan tombol power " + fung)
    }
}
console.log(laptop)
console.log(laptop.fungsi("untuk menyalakan laptop"))