import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import RouterMock from '../../__moks__/RouterMock';
import ThemeMock from '../../__moks__/ThemeMock';
import { Profile } from './index';
import { calculateAge } from './data';

jest.mock('react-simple-maps', () => ({
  __esModule: true,
  ComposableMap: ({ children }: { children?: React.ReactNode }) =>
    React.createElement('svg', null, children),
  ZoomableGroup: ({ children }: { children?: React.ReactNode }) =>
    React.createElement('g', null, children),
  Geographies: ({
    children,
  }: {
    children?: (arg: { geographies: unknown[] }) => React.ReactNode;
  }) => (children ? children({ geographies: [] }) : null),
  Geography: () => null,
  Marker: ({ children }: { children?: React.ReactNode }) =>
    React.createElement('g', null, children),
}));

describe('<Profile />', () => {
  test('renders without crashing', () => {
    const profile = shallow(
      <ThemeMock>
        <Profile />
      </ThemeMock>
    );
    expect(profile.length).toEqual(1);
  });

  test('snapshot matches expected UI', () => {
    const tree = create(
      <RouterMock>
        <Profile />
      </RouterMock>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('calculateAge()', () => {
  test('returns current year minus provided birth year', () => {
    const currentYear = new Date().getFullYear();
    expect(calculateAge(2000)).toEqual(currentYear - 2000);
  });

  test('defaults to birthYear from PROFILE (1993)', () => {
    const currentYear = new Date().getFullYear();
    expect(calculateAge()).toEqual(currentYear - 1993);
  });
});
