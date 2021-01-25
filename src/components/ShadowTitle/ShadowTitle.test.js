import React from 'react';
import { mount, shallow } from 'enzyme';
import { ShadowTitle } from './index';

describe('<ShadowTitle />', () => {
  const shodowtest = mount(<ShadowTitle id='hi'>HI</ShadowTitle>);

  test('Render of Component Navbar', () => {
    expect(shodowtest.length).toEqual(1);
    expect(shodowtest.find('#hi').text()).toEqual('HI');
  });
});
