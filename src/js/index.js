import '../styles/main.scss';

const car = {
    name: 'Bmw',
    typeBodyCar: 'Sedan',
    hasAutomaticTransmission: true,
    color: 'black',
    maxSpeed: 275,

    startDrive() { 
        console.log('Our car started drive') 
    },
    useBeep() { 
        console.log('Beep-Beep') 
    },
    sportModeOn() { 
        console.log('Sport mode on. Our car can drive faster') 
    }
};

console.log(car);

function Car (name, typeBodyCar, hasAutomaticTransmission, color, maxSpeed) {
    this.name = name;
    this.typeBodyCar = typeBodyCar;
    this.hasAutomaticTransmission = hasAutomaticTransmission;
    this.color = color;
    this.maxSpeed = maxSpeed;

    this.startDrive = function () {
        console.log('Our car started drive')
    };
    this.useBeep = function () {
        console.log('Beep-Beep') 
    };
    this.sportModeOn = function () { 
        console.log('Sport mode on. Our car can drive faster') 
    };
}

const familyCar = new Car ('Volkswagen', 'Minivan', false, 'blue', 190);

console.log(familyCar);


