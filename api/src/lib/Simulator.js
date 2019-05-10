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
    const saltTempature = Math.floor(this.randomValueByCrypto(1) * 2 * 0.1);
    const upDown = Math.floor(this.randomValueByCrypto(1) * 2 * 0.1) === 1;
    const tempature = (upDown ? container.max : container.min) + saltTempature * (upDown ? -1 : 1);
    container.tempature = tempature > 0 ? tempature * -1 : tempature;
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
    const min = 1;
    const max = 3;
    const generatedRandomValue = Math.floor(Math.random() * (min - max + 1)) + min;
    if (container.status) {
      let randomNumber = this.randomValueByCrypto(1);
      // console.log(
      //   'UpDown',
      //   randomNumber > 5,
      //   Math.random(),
      //   Math.random() > 0.5,
      //   Math.random() * [true, false].length + 1,
      //   Math.floor(Math.random() * [true, false].length + 1)
      // );
      if (randomNumber > 5) {
        // eslint-disable-next-line no-param-reassign
        container.tempature += generatedRandomValue;
      } else {
        // eslint-disable-next-line no-param-reassign
        container.tempature -= generatedRandomValue;
      }
    }
    if (container.under()) {
      if (generatedRandomValue > 0) {
        // eslint-disable-next-line no-param-reassign
        container.tempature -= generatedRandomValue;
      } else {
        // eslint-disable-next-line no-param-reassign
        container.tempature += generatedRandomValue;
      }
    }
    if (container.over()) {
      if (generatedRandomValue > 0) {
        // eslint-disable-next-line no-param-reassign
        container.tempature += generatedRandomValue;
      } else {
        // eslint-disable-next-line no-param-reassign
        container.tempature -= generatedRandomValue;
      }
    }
    return container;
  }

  execute() {
    console.log('Simulator truck', this.truck);
    const { containers } = this.truck;
    return containers.map(container => {
      return this.randofyTempature(container);
    });
  }

  run() {
    if (this.truck.containers instanceof Array) {
      this.execute();
    }
  }
}
