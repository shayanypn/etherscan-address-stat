import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';

describe('NotFound Container', () => {

	test('render', () => {
		const wrapper = shallow(<NotFound />);
		expect(wrapper.exists()).toBe(true);
	});

	test('element text regression test', () => {
		const wrapper = shallow(<NotFound />);

		expect(wrapper.find('h1').text()).toBe('404');
		expect(wrapper.find('.btn').exists()).toBe(true);
	});
});
