import MicroODM from './MicroODM';

export default class Container extends MicroODM {
  constructor(document) {
    const nestedProperty = { tempature: 0, max: 0, min: 0, status: false };
    const newdocument = {
      ...{
        get: (obj, prop) => {
          // console.log('property', prop);
          if (prop === 'status') {
            // eslint-disable-next-line dot-notation
            // console.log('status property', obj['tempature'], obj['min'], obj['max']);
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
    // newdocumentProxy.tempature = document.tempature || 0;
    // newdocumentProxy.max = document.max || 0;
    // newdocumentProxy.min = document.min || 0;
    // newdocumentProxy.status = document.status || false;

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
