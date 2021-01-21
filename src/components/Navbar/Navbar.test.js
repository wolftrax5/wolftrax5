import React from 'react';
import { shallow } from 'enzyme';

import ThemeMock from '../../__moks__/ThemeMock';
import { Navbar } from './index';

describe('<Button />', () => {
  const navbar = shallow(
    <ThemeMock>
      <Navbar />
    </ThemeMock>
  );

  test('Render of Component Navbar', () => {
    expect(navbar.length).toEqual(1);
  });
});
