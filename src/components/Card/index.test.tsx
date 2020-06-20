import React 		from 'react';
import { shallow } 	from 'enzyme';
import Card 		from './index';

describe('Card Component', () => {

	test('render', () => {
		const wrapper = shallow(<Card />);
		expect(wrapper.exists()).toBe(true);
	});

	test('element text regression test', () => {
		const wrapper = shallow(<Card />);

		wrapper.setProps({
			children: 'smaple text'
		});
		expect(wrapper.find('.card-body').text()).toEqual('smaple text');
	});

	test('component isLoading prop', () => {
		const wrapper = shallow(<Card />);

		wrapper.setProps({
			isLoading: true
		});
		expect(wrapper.find('.card').props().className).toContain('card-loading');
	});

	test('component className prop', () => {
		const wrapper = shallow(<Card />);

		wrapper.setProps({
			className: 'custom-classname'
		});
		expect(wrapper.find('.card').props().className).toContain('custom-classname');
	});
});
