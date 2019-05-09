import MicroODM from './MicroODM';

export default class Simulator extends MicroODM {
  export() {
    return this.document.truck.export();
  }

  // eslint-disable-next-line class-methods-use-this
  randofyTempature(container) {
    const min = 1;
    const max = 3;
    const generatedRandomValue = Math.floor(Math.random() * (min - max + 1)) + min;
    if (container.status()) {
      if (Math.floor(Math.random() * (0 - 1 + 1)) + 0 !== 0) {
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
    const { containers } = this.truck;
    return containers.map(container => {
      return this.randofyTempature(container);
    });
  }

  run() {
    if (this.containers.instanceOf(Array)) {
      this.execute();
    }
  }
}
