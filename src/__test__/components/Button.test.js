import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../../components/Button';

describe('<Button />', () => {
  const button = mount(<Button>My Button</Button>);

  test('Render of Component Button', () => {
    expect(button.length).toEqual(1);
  });

  test('Render of children ', () => {
    expect(button.find('.button_normal').text()).toEqual('My Button');
  });
});
