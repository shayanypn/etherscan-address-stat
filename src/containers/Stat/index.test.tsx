import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Router, Route } from 'react-router-dom';
import { createMemoryHistory } from "history";
import Card from '../../components/Card';
import Stat from './index';

const params = {
	address: '0xfFfa5813ED9a5DB4880D7303DB7d0cBe41bC771F',
	network: 'rinkeby',
};
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		address: '0xfFfa5813ED9a5DB4880D7303DB7d0cBe41bC771F',
		network: 'rinkeby',
	}),
	useRouteMatch: () => ({ url: '/stat/0xfFfa5813ED9a5DB4880D7303DB7d0cBe41bC771F/rinkeby' }),
}));

describe('Stat Container', () => {
	test('render', () => {
		const wrapper = shallow(<Stat />);
		expect(wrapper.exists()).toBe(true);
	});

	test('regression test', () => {
		const wrapper = mount(<Stat />);

		expect(wrapper.find('#btn-back').exists()).toBe(true);
		expect(wrapper.find('#btn-back').text()).toBe('Back to search');
		expect(wrapper.find('#stat-address').text()).toBe(params.address);
		expect(wrapper.find('.card').length).toEqual(3);
	});

	test('back button', () => {
		const history = createMemoryHistory();
		const wrapper = mount(
			<Router history={history}>
				<Stat />
			</Router>
		);
		wrapper.find('#btn-back').simulate('click');
		expect(history.location.pathname).toBe('/');
	});
});
