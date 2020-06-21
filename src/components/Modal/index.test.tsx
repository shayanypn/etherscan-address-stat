import React from 'react';
import { shallow } from 'enzyme';
import Modal from './index';

describe('Modal Component', () => {
  test('render', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.exists()).toBe(true);
  });

  test('regression test', () => {
    const wrapper = shallow(<Modal />);

    wrapper.setProps({
      children: 'smaple text',
    });
    expect(wrapper.find('.close').exists()).toBe(true);
    expect(wrapper.find('.custom-modal-body-content').text()).toEqual(
      'smaple text'
    );
  });

  test('component className prop', () => {
    const wrapper = shallow(<Modal />);

    wrapper.setProps({
      className: 'custom-classname',
    });
    expect(wrapper.find('.custom-modal').props().className).toContain(
      'custom-classname'
    );
  });

  test('open/close work correctly', () => {
    const onCloseMock = jest.fn();
    const wrapper = shallow(<Modal onClose={onCloseMock} />);
    wrapper.setProps({
      active: true,
    });

    expect(wrapper.find('.custom-modal').props().className).toContain('active');
    wrapper.find('.close').simulate('click');
    expect(onCloseMock).toHaveBeenCalled();
  });
});
