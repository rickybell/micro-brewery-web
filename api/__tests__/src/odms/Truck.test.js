/* eslint-disable no-undef */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import { Truck, Driver } from '../../../src/odms';

import * as mocks from '../../../__mocks__';

let truck = null;
// eslint-disable-next-line no-undef
beforeEach(() => {
  truck = new Truck({
    driver: new Driver({ name: 'Jess' }),
    containers: mocks.contaneirs
  });
});

describe('Truck', () => {
  describe('Constructor', () => {
    // eslint-disable-next-line no-undef
    it('Should class was created', () => {
      // eslint-disable-next-line no-undef
      expect(truck.type).toEqual('truck');
    });
  });
});
