import React from 'react';
import { shallow } from 'enzyme';

import ThemeMock from '../../__moks__/ThemeMock';
import { AppLayout } from './index';

describe('<AppLayout />', () => {
  const app = shallow(
    <ThemeMock>
      <AppLayout>Hola Mundo</AppLayout>
    </ThemeMock>
  );

  test('Render of Component AppLayout', () => {
    expect(app.length).toEqual(1);
  });
});
