import React from 'react';
import ReactDom from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Temperatures from '../src/components/Temperatures';
import {expect} from 'chai';

const values = [{
    'place': 'Bottom',
    'temperature': 19.5
}, {
    'place': 'Top',
    'temperature': 22.1
}];

describe('Temperatures', () => {
    it('renders a pair of temperatures', () => {
        const component = renderIntoDocument(
            <Temperatures values={values} />
        );
        const h2 = scryRenderedDOMComponentsWithTag(component, 'h2');
        const p = scryRenderedDOMComponentsWithTag(component, 'p');

        expect(h2.length).to.equal(2);
        expect(p.length).to.equal(2);
        expect(h2[0].textContent).to.equal('Bottom');
        expect(h2[1].textContent).to.equal('Top');
        expect(p[0].textContent).to.equal('19.5℃');
        expect(p[1].textContent).to.equal('22.1℃');
    });
});
