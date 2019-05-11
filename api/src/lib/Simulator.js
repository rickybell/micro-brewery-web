import MicroODM from './MicroODM';
import crypto from 'crypto';
import * as constants from './../constants';
import {
  PilsnerContainer,
  StoutContainer,
  IPAContainer,
  LargerContainer,
  WheatBeerContainer,
  PaleAleContainer
} from '../odms';
import * as mocks from './../../__mocks__';

export default class Simulator extends MicroODM {
  export() {
    return JSON.stringify(this.truck);
  }

  fillFakeValues(container) {
    
    const currentTempature = container.tempature;
    let newTempature = 0;
    let i = 0;
    do{
      let saltTempature = Math.floor(this.randomValueByCrypto(1) * 4 * 0.1);
      let upDown = Math.floor(this.randomValueByCrypto(1) * 1.543 * 0.1) === 1;
      newTempature = (upDown ? container.max : container.min) + saltTempature * (upDown ? -1 : 1);
      i++;
    }while(newTempature === currentTempature || i < 5)
    
    container.tempature = newTempature > 0 ? newTempature * -1 : newTempature;
    
    return container;
  }

  starting() {
    const beerSelection = [
      constants.PILSNER_CONTAINER,
      constants.STOUT_CONTAINER,
      constants.IPA_CONTAINER,
      constants.LARGER_CONTAINER,
      constants.WHEATBEER_CONTAINER,
      constants.PALEALE_CONTAINER,
      constants.NUMBER_OF_CONTAINERS
    ];

    for (let index = 0; index < constants.NUMBER_OF_CONTAINERS; index++) {
      const index = Math.floor(this.randomValueByCrypto(1) * 6 * 0.1) - 1;
      switch (beerSelection[index]) {
        case constants.PILSNER_CONTAINER:
          console.log(typeof this.truck.containers);
          this.truck.containers.add(this.fillFakeValues(new PilsnerContainer({})));
          break;
        case constants.STOUT_CONTAINER:
          this.truck.containers.add(this.fillFakeValues(new StoutContainer({})));
          break;
        case constants.IPA_CONTAINER:
          this.truck.containers.add(this.fillFakeValues(new IPAContainer({})));
          break;
        case constants.LARGER_CONTAINER:
          this.truck.containers.add(this.fillFakeValues(new LargerContainer({})));
          break;
        case constants.WHEATBEER_CONTAINER:
          this.truck.containers.add(this.fillFakeValues(new WheatBeerContainer({})));
          break;
        default:
          this.truck.containers.add(this.fillFakeValues(new PaleAleContainer({})));
          break;
      }
    }
  }

  randomValueByCrypto(len) {
    const value = crypto
      .randomBytes(Math.ceil(len / 2))
      .toString('hex')
      .slice(0, len);
    return Number(value) ? value : Math.floor(value.charCodeAt() * 0.1);
  }

  // eslint-disable-next-line class-methods-use-this
  randofyTempature(container) {
    // const min = 1;
    // const max = 3;
    // const generatedRandomValue = Math.floor(Math.random() * (min - max + 1)) + min;
    // if (container.status) {
    //   let randomNumber = this.randomValueByCrypto(1);
    //   if (randomNumber > 5) {
    //     // eslint-disable-next-line no-param-reassign
    //     container.tempature += generatedRandomValue;
    //   } else {
    //     // eslint-disable-next-line no-param-reassign
    //     container.tempature -= generatedRandomValue;
    //   }
    // }
    // if (container.under()) {
    //   if (generatedRandomValue > 0) {
    //     // eslint-disable-next-line no-param-reassign
    //     container.tempature -= generatedRandomValue;
    //   } else {
    //     // eslint-disable-next-line no-param-reassign
    //     container.tempature += generatedRandomValue;
    //   }
    // }
    // if (container.over()) {
    //   if (generatedRandomValue > 0) {
    //     // eslint-disable-next-line no-param-reassign
    //     container.tempature += generatedRandomValue;
    //   } else {
    //     // eslint-disable-next-line no-param-reassign
    //     container.tempature -= generatedRandomValue;
    //   }
    // }
    return this.fillFakeValues(container);
  }

  random() {
    let containers = this.truck.document.containers.setOfItems.map(container => {
      return this.randofyTempature(container);
    });
    this.truck.document.containers.setOfItems = containers;
    return this.truck;
  }

  run() {
    if (this.truck.containers.setOfItems instanceof Array) {
      this.random();
    }
  }
}
