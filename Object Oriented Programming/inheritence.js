class SmartDevices {
    constructor(name, price) {
        this.name = name;
        this.price = price;  
    }
    charging(){
        console.log("yes, we are providing Charger");
    }
}

class Phone extends SmartDevices {
    constructor(name, price, camera) {
        super(name, price)
        this.camera = camera;
    }
}
class Laptop {
    constructor(name, price, battery) {
        this.name = name;
        this.price = price;
        this.battery = battery;
    }
}class Tablet {
    constructor(name, price, isWifi) {
        this.name = name;
        this.price = price;
        this.isWifi = isWifi;
    }
}

const newPhone = new Phone('Samsung', 13000, "16MP")
console.log(newPhone);
newPhone.charging()
console.log();