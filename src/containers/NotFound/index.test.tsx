import React from 'react';
import { shallow, mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import NotFound from './index';

describe('NotFound Container', () => {
  test('render', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.exists()).toBe(true);
  });

  test('regression test', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('h1').text()).toBe('404');
    expect(wrapper.find('.btn').exists()).toBe(true);
  });

  test('back button', () => {
    const history = createMemoryHistory();
    const wrapper = mount(
      <Router history={history}>
        <NotFound />
      </Router>
    );

    wrapper.find('.btn').simulate('click');

    expect(history.location.pathname).toBe('/');
  });
});
