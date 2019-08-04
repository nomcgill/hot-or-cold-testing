import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from './status-section.js';

describe('<StatusSection />', () => {
    it('Renders without crashing', () => {
        shallow(<StatusSection />)
    })
})

// const callback = jest.fn();
// const wrapper = mount(<AddForm onAdd={callback} />);
// const value = 'Foobar';
// wrapper.instance().setEditing(true);
// wrapper.update();
// wrapper.find('input[type="text"]').instance().value = value;
// wrapper.simulate('submit');
// expect(callback).toHaveBeenCalledWith(value);