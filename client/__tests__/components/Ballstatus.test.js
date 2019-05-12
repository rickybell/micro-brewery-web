import React from 'react';
import renderer from 'react-test-renderer'
import * as mocks from '../../__mocks__';
import BallStatus from '../../src/components/BallStatus';

describe('Status', () => {
    beforeEach(() => {
        
    })
    describe('When true', () => {
        it('Should select the respective ClassName.', () => {
            const tree = renderer.create(<BallStatus status={mocks.statusTrue.status}/>).toJSON();
            expect(tree.props.style.backgroundColor).toEqual('green');
        });
    });
    describe('When false', () => {
        it('Should select the respective ClassName.', () => {
            const tree = renderer.create(<BallStatus status={mocks.statusFalse.status} />).toJSON();
            expect(tree.props.style.backgroundColor).toEqual('red');
        });
    });
});