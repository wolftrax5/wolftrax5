import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import ThemeMock from '../../__moks__/ThemeMock';
import RouterMock from '../../__moks__/RouterMock';
import { Navbar } from './index';
import { NavContainer, NavLink, NavSection } from './styles';

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
    const navContainer = create(
      <NavContainer className='nav_container' />
    ).toJSON();
    expect(navContainer).toMatchSnapshot();
  });

  test('Check UI of component NavSections', () => {
    const navSection = create(<NavSection />).toJSON();
    expect(navSection).toMatchSnapshot();
  });

  test('Check UI of Navbar', () => {
    const navbar = create(
      <RouterMock>
        <Navbar />
      </RouterMock>
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });

  test('Check UI of NavLinks', () => {
    const navbar = create(
      <RouterMock>
        <NavLink to='/' />
      </RouterMock>
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
