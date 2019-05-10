import Container from '../lib/Container';
import MicroODM from '../lib/MicroODM';

export class PilsnerContainer extends Container {
    constructor(document){
        super({ ...{ min: -6, max: -4 }, ...document})
    }
}
export class StoutContainer extends Container {
    constructor(document) {
        super({ ...{ min: -8, max: -6 }, ...document })
    }
}
export class IPAContainer extends Container {
    constructor(document) {
        super({ ...{ min: -6, max: -5 }, ...document })
    }
}
export class LargerContainer extends Container {
    constructor(document) {
        super({ ...{ min: -4, max: -7 }, ...document })
    }
}
export class WheatBeerContainer extends Container {
    constructor(document) {
        super({ ...{ min: -5, max: -3 }, ...document })
    }
}
export class PaleAleContainer extends Container {
    constructor(document) {
        super({ ...{ min: -6, max: -4 }, ...document })
    }
}
export class Truck extends MicroODM {
    constructor(document) {
        super({ ...{}, ...document })
    }
}
export class Driver extends MicroODM {
    constructor(document) {
        super({ ...{}, ...document })
    }
}
