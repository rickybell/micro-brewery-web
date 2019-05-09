/* eslint-disable no-undef */
import MicroODM from '../../../src/lib/MicroODM';

describe('MicroODM', () => {
  describe('status', () => {
    describe('inside tempature', () => {
      it('should be between max and min tempature.', () => {
        const microODM = new MicroODM({ tempature: -5, max: -4, min: -6 });
        expect(microODM.status()).toBeTruthy();
      });
    });

    describe('outside tempature', () => {
      it('should be false over max tempature.', () => {
        const microODM = new MicroODM({ tempature: -3, max: -4, min: -6 });
        expect(microODM.status()).toBeFalsy();
      });
      it('should be false under min tempature.', () => {
        const microODM = new MicroODM({ tempature: -7, max: -4, min: -6 });
        expect(microODM.status()).toBeFalsy();
      });
    });
  });
  describe('over', () => {
    it('should be true when over the tempature', () => {
      const microODM = new MicroODM({ tempature: -3, max: -4, min: -6 });
      expect(microODM.over()).toBeTruthy();
    });
  });
  describe('under', () => {
    it('should be true when under the tempature', () => {
      const microODM = new MicroODM({ tempature: -7, max: -4, min: -6 });
      expect(microODM.under()).toBeTruthy();
    });
  });
});
