import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game.js';

describe('<Game />', () => {
    it('Renders without crashing', () =>{
        shallow(<Game />);
    })
    // it('Renders the add button initially', () => {
    //     const wrapper = shallow(<Game />);
    //     expect(wrapper.hasClass('add-button')).toEqual(true);
    // });
})
