import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setValues} from '../src/core';

describe('application logic', () => {
    describe('setValues', () => {
        it('adds measured values to the state', () => {
            const state = Map();
            const values = List.of({
                'place': 'Bottom',
                'temperature': 19.5
            }, {
                'place': 'Top',
                'temperature': 22.1
            });
            const nextState = setValues(state, values);

            expect(nextState).to.equal(Map({
                values: List.of({
                    'place': 'Bottom',
                    'temperature': 19.5
                }, {
                    'place': 'Top',
                    'temperature': 22.1
                })
            }));
        });
    });
});
