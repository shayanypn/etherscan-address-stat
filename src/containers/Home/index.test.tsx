import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';
import Form from '../../components/Form';

describe('Home Container', () => {

	test('render', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.exists()).toBe(true);
	});

	test('element text regression test', () => {
		const wrapper = shallow(<Home />);

		expect(wrapper.find('h1').text()).toBe('Ethereum address stat');
	    expect(wrapper.containsMatchingElement(<Form />)).toEqual(true);
	});
});
