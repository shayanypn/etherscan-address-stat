import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Form from './components/Form';

describe('App Component', () => {

	test('render', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});

	test('element text regression test', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.find('h1').text()).toBe('Ethereum address stat');
	    expect(wrapper.containsMatchingElement(<Form />)).toEqual(true);
	});
});