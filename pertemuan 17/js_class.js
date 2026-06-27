// pengertian js class
// Class adalah sebuah cetakan (template) yang digunakan untuk membuat objek.
// Bayangkan seperti cetakan kue. 
// Cetakan tersebut menentukan bentuk kue yang akan dibuat, tetapi belum menjadi kue sungguhan sampai adonannya dicetak.


class Mahasiswa {
    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
    }

    perkenalan() {
        console.log(`Halo, saya ${this.nama} dengan NIM ${this.nim}`);
    }
}

