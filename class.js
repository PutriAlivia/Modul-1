//super class
class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        alert(`${this.destination} akan memakan ${this.days} hari`);
    }
    
}

//sub class
class Expedition extends Holiday{
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }

    info(){
        super.info();
        alert(`Bawalah ${this.gear.join(' dan juga')}`);
    }
}

const tripWithGear = new Expedition('Semeru', 7, ['Kacamata', 'Jaket', 'Kamera']);
tripWithGear.info();