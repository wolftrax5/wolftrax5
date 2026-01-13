import React from 'react';
import { mount } from 'enzyme';
import { ShadowTitle } from './index';

describe('<ShadowTitle />', () => {
  const shodowtest = mount(<ShadowTitle>HI</ShadowTitle>);

  test('Render of Component ShadowTitle', () => {
    expect(shodowtest.length).toEqual(1);
    expect(shodowtest.text()).toEqual('HI');
  });
});
