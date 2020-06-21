import React from 'react';
import { shallow, mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Home from './index';
import Form from '../../components/Form';

describe('Home Container', () => {
  const CORRECT_ADDRESS = '0xb3775fb83f7d12a36e0475abdd1fca35c091efbe';

  test('render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });

  test('regression test', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.containsMatchingElement(<Form />)).toEqual(true);
  });

  test('form work correctly', () => {
    const history = createMemoryHistory();
    const wrapper = mount(
      <Router history={history}>
        <Home />
      </Router>
    );
    wrapper
      .find('#input-address')
      .simulate('change', { target: { value: CORRECT_ADDRESS } });
    wrapper.find('.btn').simulate('click');

    expect(wrapper.find('#select-addresses option').length).toEqual(2);

    expect(history.location.pathname).toBe(`/stat/${CORRECT_ADDRESS}/rinkeby`);
  });
});
