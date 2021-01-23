import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import ThemeMock from '../../__moks__/ThemeMock';
import { Navbar } from './index';
import { NavContainer } from './styles';

describe('<Navbar />', () => {
  const navbar = shallow(
    <ThemeMock>
      <Navbar />
    </ThemeMock>
  );

  test('Render of Component Navbar', () => {
    expect(navbar.length).toEqual(1);
  });
});

describe('NavContainer snapshot', () => {
  test('Check UI of component NavContainer', () => {
    const navContainer = create(<NavContainer />).toJSON();
    expect(navContainer).toMatchSnapshot();
  });
});
