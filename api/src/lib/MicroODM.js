/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
export default class MicroODM {
  constructor(document = {}) {
    document.type = this.constructor.name.toLowerCase();
    this.document = document;

    if (!this.document._id) this.document._id = Math.random().toString();

    const configuration = {};
    Object.keys(document).forEach(prop => {
      configuration[prop] = {
        get() {
          return this.document[prop];
        },
        set(value) {
          this.document[prop] = value;
        }
      };
    });
    Object.defineProperties(this, configuration);
  }

  export() {
    return JSON.stringify(this.document);
  }

  status() {
    return !this.over() && !this.under();
  }

  over() {
    return this.tempature > this.max;
  }

  under() {
    return this.tempature < this.min;
  }
}
