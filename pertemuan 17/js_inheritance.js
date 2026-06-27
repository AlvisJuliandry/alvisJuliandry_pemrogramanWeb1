class Kendaraan {
    constructor(merk) {
        this.merk = merk;
    }

    jalan() {
        console.log(`${this.merk} sedang berjalan`);
    }
}

class Mobil extends Kendaraan {
    constructor(merk, tipe) {
        super(merk);
        this.tipe = tipe;
    }

    info() {
        console.log(`Mobil ${this.merk} tipe ${this.tipe}`);
    }
}

const mobil1 = new Mobil("Toyota", "Avanza");

mobil1.info();
mobil1.jalan();