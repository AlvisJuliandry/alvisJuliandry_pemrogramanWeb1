class Mahasiswa {
    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
    }

    perkenalan() {
        console.log(`Halo, saya ${this.nama}`);
    }
}

const mhs1 = new Mahasiswa("Alvis", "2211001");
const mhs2 = new Mahasiswa("Budi", "2211002");

mhs1.perkenalan();
mhs2.perkenalan();