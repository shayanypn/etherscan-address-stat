import React from 'react';
import { shallow } from 'enzyme';
import Stat from './index';

describe('Stat Container', () => {

	test('render', () => {
		const wrapper = shallow(<Stat />);
		expect(wrapper.exists()).toBe(true);
	});
});
