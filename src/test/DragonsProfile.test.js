import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DragonsProfile from '../components/DragonsProfile';

test('Check if dragons profile component is rendered correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <DragonsProfile />
      </BrowserRouter>
    </Provider>, // Add the trailing comma here
  );
  expect(asFragment()).toMatchSnapshot();
});