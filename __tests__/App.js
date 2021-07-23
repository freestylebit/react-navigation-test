import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText('Go to Details'))

  getByText('Details Screen')
});
