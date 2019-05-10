/* eslint-disable no-undef */
import Container from '../../../src/lib/Container';

describe('Container', () => {
  describe('name', () => {
    it('should name be equal the Constructor.', () => {
      const container = new Container({ tempature: -5, max: -4, min: -6 });
      expect(container.name).toEqual('Container');
    });
  });
  describe('status', () => {
    describe('inside tempature', () => {
      it('should be between max and min tempature.', () => {
        const container = new Container({ tempature: -5, max: -4, min: -6 });
        expect(container.status).toBeTruthy();
      });
    });

    describe('outside tempature', () => {
      it('should be false over max tempature.', () => {
        const container = new Container({ tempature: -3, max: -4, min: -6 });
        expect(container.status).toBeFalsy();
      });
      it('should be false under min tempature.', () => {
        const container = new Container({ tempature: -7, max: -4, min: -6 });
        expect(container.status).toBeFalsy();
      });
    });
  });
  describe('over', () => {
    it('should be true when over the tempature', () => {
      const container = new Container({ tempature: -3, max: -4, min: -6 });
      expect(container.over).toBeTruthy();
    });
  });
  describe('under', () => {
    it('should be true when under the tempature', () => {
      const container = new Container({ tempature: -7, max: -4, min: -6 });
      expect(container.under()).toBeTruthy();
    });
  });
});
