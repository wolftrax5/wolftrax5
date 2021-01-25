import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import { ZeroLoad } from './index';
import { Zero } from './styles';

describe('<ZeroLoad />', () => {
  const zero = shallow(<ZeroLoad />);

  test('Render of Component ZeroLoad', () => {
    expect(zero.length).toEqual(1);
  });
});

describe('ZeroLoad Snapshot', () => {
  test('Check UI of component ZeroLoad', () => {
    const zero = create(<ZeroLoad />).toJSON();
    expect(zero).toMatchSnapshot();
  });
  test('Check UI of component Zero', () => {
    const zero = create(<Zero />).toJSON();
    expect(zero).toMatchSnapshot();
  });
});
