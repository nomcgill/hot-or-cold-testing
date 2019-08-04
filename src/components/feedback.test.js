import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback.js';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />)
    })
})