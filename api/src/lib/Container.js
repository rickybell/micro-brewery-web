import MicroODM from './MicroODM';

export default class Container extends MicroODM {
  constructor(document) {
    const nestedProperty = { tempature: 0, max: 0, min: 0, status: false };
    const newdocument = {
      ...{
        get: (obj, prop) => {
          if (prop === 'status') {
            // eslint-disable-next-line dot-notation
            return !(obj['tempature'] < obj['min'] || obj['tempature'] > obj['max']);
          }
          return obj[prop];
        }
      },
      ...document
    };
    const newdocumentProxy = new Proxy({}, newdocument);
    Object.keys(nestedProperty).forEach(prop => {
      newdocumentProxy[prop] = document[prop] || nestedProperty[prop];
    });
    super(newdocumentProxy);
  }

  defineStatus() {
    return !(this.under() || this.over());
  }

  over() {
    return this.tempature > this.max;
  }

  under() {
    return this.tempature < this.min;
  }
}
