import React from 'react';
import { mount } from 'enzyme';

import { Button } from '.';

describe('<Button />', () => {
  const button = mount(<Button>My Button</Button>);

  test('Render of Component Button', () => {
    expect(button.length).toEqual(1);
  });

  test('Render of children ', () => {
    expect(button.find('.button_normal').text()).toEqual('My Button');
  });
  test('Click on button', () => {
    const handlerClick = jest.fn();
    const wrapper = mount(
      <Button id='button1' onClick={handlerClick}>
        My Button
      </Button>
    );
    expect(wrapper.find('#button1').exists()).toBeTruthy();
    // why use hostNodes : https://github.com/enzymejs/enzyme/issues/836#issuecomment-374899433
    wrapper.find('#button1').hostNodes().simulate('click');
    expect(handlerClick).toHaveBeenCalledTimes(1);
  });
});
