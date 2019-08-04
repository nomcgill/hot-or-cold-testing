import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game.js';

describe('<Game />', () => {
    it('Renders without crashing', () =>{
        shallow(<Game />);
    })
    it('generates correct answer greater than 0', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state().correctAnswer).toBeGreaterThan(0);
    });
    it('generates correct answer 100 or less', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.state().correctAnswer).toBeLessThanOrEqual(100);
    });
})


