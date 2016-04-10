import React from 'react';
import ReactDom from 'react-dom';
import Temperatures from './components/Temperatures';

const values = [{
    'place': 'Bottom',
    'temperature': 19.5
}, {
    'place': 'Top',
    'temperature': 22.1
}];

ReactDom.render(
    <Temperatures values={values} />,
    document.getElementById('app')
);
