import * as mocks from './../__mocks__/index'
export default {
    get: jest.fn(() => Promise.resolve({
        data: mocks.truck
    })),
}