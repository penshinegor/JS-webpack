import '../styles/main.scss';

class Transport {
    
    constructor(name, producerCountry, editionYear) {
        this.name = name;
        this.producerCountry = producerCountry;
        this.editionYear = editionYear;
    }

    showInfo() {
        return `This ${this.name} was made in ${this.producerCountry} in ${this.editionYear}`;
    }

    startEngine() {
        return `Engine is working. ${this.name} ready to go.`;
    }
}

class WaterTransport extends Transport {

    constructor(name, producerCountry, editionYear, hasAnchor){
        super(name, producerCountry, editionYear);
        this.hasAnchor = hasAnchor;
    }

    showInfo() {
        return `${super.showInfo()} \nPresence of anchor: ${this.hasAnchor}`;
    }

    dropAnchor() {
        if(this.hasAnchor) {
            return 'The anchor is dropped.';
        }
        else {
            return `${this.name} doesn't have the anchor`;
        }
    }

    #setCoordinates(сoordinates) {
        this.coordinates = сoordinates;
    }

    enableGPS(сoordinates) {
        this.#setCoordinates(сoordinates);
        return `We are moving to the point of given coordinates(${this.coordinates})`;
    }
}

class Ship extends WaterTransport {

    constructor(name, producerCountry, editionYear, hasAnchor, amountBlades, hasFlag) {
        super(name, producerCountry, editionYear, hasAnchor);
        this.amountBlades = amountBlades;
        this.hasFlag = hasFlag;
    }

    raiseFlag() {
        if(this.hasFlag) {
            return `${this.producerCountry}'s flag is raised`;
        }
    }

    showInfo() {
        return `${super.showInfo()} \nAmount blades: ${this.amountBlades} \nPresence of ${this.producerCountry}'s flag:  ${this.hasFlag}`;
    }

    startEngine() {
        return `${super.startEngine()} \n${this.amountBlades} blades start working`;
    }
}