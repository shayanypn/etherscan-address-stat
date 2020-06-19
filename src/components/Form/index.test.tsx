import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';

describe('Form Component', () => {

	const correct_the_address = '0xb3775fb83f7d12a36e0475abdd1fca35c091efbe';

	test('render', () => {
		const wrapper = shallow(<Form />);
		expect(wrapper.exists()).toBe(true);
	});

	test('element text regression test', () => {
		const wrapper = shallow(<Form />);

		expect(wrapper.find('[htmlFor="input-address"]').text()).toBe('Address');
		expect(wrapper.find('[htmlFor="select-addresses"]').text()).toBe('Last used address');
		expect(wrapper.find('[htmlFor="select-network"]').text()).toBe('Network');
		expect(wrapper.find('#select-addresses option').length).toEqual(1);
		expect(wrapper.find('#select-addresses option:first-child').text()).toBe('Select from previous address');
		expect(wrapper.find('#select-network option').length).toEqual(2);
		expect(wrapper.find('#select-network option:first-child').text()).toBe('Rinkeby');
		expect(wrapper.find('#select-network option:last-child').text()).toBe('Mainnet');
		expect(wrapper.find('.btn').text()).toBe('Check balance and transaction');
	});

	test('input address work correctly', () => {
		const wrapper = shallow(<Form />);

		wrapper.find('#input-address').simulate('change', { target: { value: 'thecorn-address-code' } })
		expect(wrapper.find('#input-address').props().value).toBe('thecorn-address-code');

		wrapper.find('#input-address').simulate('change', { target: { value: correct_the_address } })
		expect(wrapper.find('#input-address').props().className).toContain('is-valid');

		wrapper.find('#input-address').simulate('change', { target: { value: '0xb3775fb83f7d12a36e0475abdd1fca35c091efb' } })
		expect(wrapper.find('#input-address').props().className).toContain('is-invalid');
	});

	test('store address after submit', () => {
		const onSubmitMock = jest.fn()
		const wrapper = shallow(<Form onSubmit={onSubmitMock} />);
		const operatesubmitAction = () => {
			wrapper.find('#input-address').simulate('change', { target: { value: correct_the_address } })
			wrapper.find('.btn').simulate('click');
		};

		expect(wrapper.find('#select-addresses option').length).toEqual(1);

		operatesubmitAction();
		expect(wrapper.find('#select-addresses option').length).toEqual(2);

		operatesubmitAction();
		operatesubmitAction();
		operatesubmitAction();
		operatesubmitAction();
		operatesubmitAction();
		operatesubmitAction();

		expect(wrapper.find('#select-addresses option').length).toEqual(6);
	});


	test('used address work correctly', () => {
		const onSubmitMock = jest.fn()
		const wrapper = shallow(<Form onSubmit={onSubmitMock} />);
		const operatesubmitAction = () => {
			wrapper.find('#input-address').simulate('change', { target: { value: correct_the_address } })
			wrapper.find('.btn').simulate('click');
		};

		expect(wrapper.find('#select-addresses option').length).toEqual(1);

		operatesubmitAction();
		expect(wrapper.find('#select-addresses option').length).toEqual(2);

		wrapper.find('#select-addresses').simulate('change', { target: { value: correct_the_address } } );

		expect(wrapper.find('#input-address').props().value).toBe(correct_the_address);
	});

	test('submit work correctly', () => {
		const onSubmitMock = jest.fn()
		const wrapper = shallow(<Form onSubmit={onSubmitMock} />);

		wrapper.find('#input-address').simulate('change', { target: { value: correct_the_address } })
		wrapper.find('#select-network').simulate('change', { target: { value: 'mainnet' } })
		wrapper.find('.btn').simulate('click');
		expect(onSubmitMock).toHaveBeenCalledWith({address: correct_the_address, network: 'mainnet'})
	});
});

