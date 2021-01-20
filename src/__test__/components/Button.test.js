import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../../components/Button';

describe('<Button />', () => {
  test('Render of Component Button', () => {
    const button = mount(<Button />);
    expect(button.length).toEqual(1);
  });
});
