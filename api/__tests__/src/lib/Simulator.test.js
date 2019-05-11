/* eslint-disable no-undef */
import * as mocks from '../../../__mocks__';
import Simulator from '../../../src/lib/Simulator';

let simulator = null;

beforeEach(() => {
  simulator = new Simulator({ truck: mocks.truck });
});

describe('Simulator', () => {
  describe('Methods:', () => {
    describe('Constructor', () => {
      it('should create the Class', () => {
        expect(simulator.type).toEqual('simulator');
      });
    });
    describe('export', () => {
      it('should change values of containers inside the truck.', () => {
        expect(simulator.export()).toEqual(mocks.truckExported);
      });
    });
    describe('randofyTempature', () => {
      describe("When 'status' is 'ok' ", () => {
        it('should generate the value aleatory to up or down.', () => {
          try {
            // eslint-disable-next-line no-unused-vars
            const p = new Promise((resolve, reject) => {
              global.Math.random = () => 3;
              resolve(simulator.execute(mocks.pilsnerContainer));
            })
              .then(container => {
                expect(container.status()).toBeFalsy();
                expect(container.over()).toBeTruthy();
              })
              .catch(error => {
                throw error;
              });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        });
      });
      describe("When 'status' is 'under' ", () => {
        it('should generate the value up between 1 or 3 degrees', () => {
          try {
            // eslint-disable-next-line no-unused-vars
            const p = new Promise((resolve, reject) => {
              global.Math.random = () => 1;
              resolve(simulator.execute(mocks.largerContainer2));
            })
              .then(container => {
                expect(container.status()).toBeTruthy();
                expect(container.under()).toBeFalsy();
              })
              .catch(error => {
                throw error;
              });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        });
      });
      describe("When 'status' is 'over' ", () => {
        it('should generate the value down between 1 or 3 degrees', () => {
          try {
            // eslint-disable-next-line no-unused-vars
            const p = new Promise((resolve, reject) => {
              global.Math.random = () => 1;
              resolve(simulator.execute(mocks.wheatBeerContainer1));
            })
              .then(container => {
                expect(container.status()).toBeTruthy();
                expect(container.over()).toBeFalsy();
              })
              .catch(error => {
                throw error;
              });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          }
        });
      });
    });
    describe('random', () => {
      it("should always generate new values to tempature.", () => {
        
        const firstCurrentTempature = simulator.truck.containers.setOfItems[0].tempature
        const secondCurrentTempature = simulator.truck.containers.setOfItems[1].tempature

        let firstNewTempature = 0
        let secondNewTempature = 0
        
        simulator.random();
        
        firstNewTempature = simulator.truck.containers.setOfItems[0].tempature
        secondNewTempature = simulator.truck.containers.setOfItems[1].tempature
        
        expect(firstCurrentTempature).not.toEqual(firstNewTempature);
        expect(secondCurrentTempature).not.toEqual(secondNewTempature);
      });
    });
  });
});
