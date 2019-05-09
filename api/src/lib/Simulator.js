import MicroODM from './MicroODM';
import crypto from 'crypto';

export default class Simulator extends MicroODM {
  export() {
    return this.truck.export();
  }

  randomValueHex(len) {
    const value = crypto
      .randomBytes(Math.ceil(len / 2))
      .toString('hex') // convert to hexadecimal format
      .slice(0, len); // return required number of characters
    return Number(value) ? value : Math.floor(value.charCodeAt() * 0.1);
  }

  // eslint-disable-next-line class-methods-use-this
  randofyTempature(container) {
    const min = 1;
    const max = 3;
    const generatedRandomValue = Math.floor(Math.random() * (min - max + 1)) + min;
    if (container.status) {
      let randomNumber = this.randomValueHex(1);
      console.log(
        'UpDown',
        randomNumber > 5,
        Math.random(),
        Math.random() > 0.5,
        Math.random() * [true, false].length + 1,
        Math.floor(Math.random() * [true, false].length + 1)
      );
      if (randomNumber > 5) {
        console.log('1', generatedRandomValue);
        // eslint-disable-next-line no-param-reassign
        container.tempature += generatedRandomValue;
      } else {
        console.log('2', generatedRandomValue);
        // eslint-disable-next-line no-param-reassign
        container.tempature -= generatedRandomValue;
      }
    }
    if (container.under()) {
      if (generatedRandomValue > 0) {
        console.log('3', generatedRandomValue);
        // eslint-disable-next-line no-param-reassign
        container.tempature -= generatedRandomValue;
      } else {
        console.log('4', generatedRandomValue);
        // eslint-disable-next-line no-param-reassign
        container.tempature += generatedRandomValue;
      }
    }
    if (container.over()) {
      if (generatedRandomValue > 0) {
        console.log('5', generatedRandomValue);
        // eslint-disable-next-line no-param-reassign
        container.tempature += generatedRandomValue;
      } else {
        console.log('6', generatedRandomValue);
        // eslint-disable-next-line no-param-reassign
        container.tempature -= generatedRandomValue;
      }
    }
    return container;
  }

  execute() {
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
