import '../styles/main.scss';

const car = {
    name: 'Bmw',
    typeBodyCar: 'Sedan',
    hasAutomaticTransmission: true,
    color: 'black',
    editionYear: 2004,

    showInfo() { 
        return `Car ${this.name} has ${this.typeBodyCar} body type \nHaving an automatic transmission - ${this.hasAutomaticTransmission} \nColor: ${this.color} \nEdition year: ${this.editionYear}`;
    },
    startEngine() { 
        return `Engine is working. ${this.name} ready to go`;
    },
    drive(speed) {
        return `Car is driving with ${speed} speed`;
    }
};

console.log(car);

function Car (name, typeBodyCar, hasAutomaticTransmission, color, editionYear) {
    this.name = name;
    this.typeBodyCar = typeBodyCar;
    this.hasAutomaticTransmission = hasAutomaticTransmission;
    this.color = color;
    this.editionYear = editionYear;

    this.showInfo = function () {
        return `Car ${this.name} has ${this.typeBodyCar} body type \nHaving an automatic transmission - ${this.hasAutomaticTransmission} \nColor: ${this.color} \nEdition year: ${this.editionYear}`;
    };
    this.startEngine = function () {
        return `Engine is working. ${this.name} ready to go`;
    };
    this.drive = function (speed) { 
        return `Car is driving with ${speed} speed`;
    };
}

const familyCar = new Car ('Volkswagen', 'Minivan', false, 'blue', 1999);

console.log(familyCar); 