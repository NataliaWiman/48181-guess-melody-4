import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

it(`should show correct numbers`, () => {
  const tree = renderer.create(<WelcomeScreen gameTime={7} errorCount={4}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
