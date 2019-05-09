/* eslint-disable no-undef */
import CollectionODM from '../../../src/lib/CollectionODM';
import { PilsnerContainer, StoutContainer } from '../../../src/odms';
import * as mocks from '../../../__mocks__';

let collectionODM = null;
beforeEach(() => {
  global.Math.random = () => 0.30950533601439867;
  collectionODM = new CollectionODM([new PilsnerContainer({ tempature: -1 })]);
  global.Math.random = () => 0.2839740785097704;
});
describe('CollectionODM', () => {
  describe('Methods:', () => {
    describe('Constructor', () => {
      it('Should the class was created.', () => {
        expect(collectionODM.type).toEqual('collectionodm');
      });
    });
    describe('size', () => {
      it('should return the number of items.', () => {
        expect(collectionODM.size()).toEqual(1);
      });
    });
    describe('add', () => {
      it("should 'Item' was added item to class.", () => {
        collectionODM.add(new StoutContainer({ tempature: 0 }));
        expect(collectionODM.setOfItems.length).toEqual(2);
      });
    });
    describe('export', () => {
      it('should return export data of the collection', async () => {
        collectionODM.add(new StoutContainer({ tempature: 0 }));
        expect(collectionODM.export()).toEqual(mocks.importedCollection);
      });
    });
    describe('delete', () => {
      it('should remove the object from collection', () => {
        collectionODM.delete({ id: 0.30950533601439867 });
        expect(collectionODM.size()).toEqual(0);
      });
    });
    describe('find', () => {
      it('should brings the object from the information', () => {
        const obj = collectionODM.find({ id: 0.30950533601439867 });
        expect(obj.type).toEqual('pilsnercontainer');
      });
    });
  });
  describe('Iterator methods:', () => {
    it('should iterate over the object', () => {
      collectionODM.add(new StoutContainer({ tempature: 0 }));
      const items = collectionODM.iterator();
      expect(items.next().value.type).toEqual('pilsnercontainer');
      expect(items.next().value.type).toEqual('stoutcontainer');
    });
  });
});
