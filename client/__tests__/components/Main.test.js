import React from 'react';
import { shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import Main from './../../src/components/Main'

afterEach (() => {
    mockAxios.reset();
});

describe('Main', () => {
    describe('getApiData', () => {
        describe('retrieve data from API', () => {
            it('should get the driver and truck containers.', async () => { 
                const tree = shallow(<Main />);
                tree.instance().getApiData().then((result) => {
                    expect(result.driver.driver_name).toEqual("Jess")
                    expect(result.driver.containers.setOfItems.lenght).toEqual(8)
                })
            });
        });
    });
});