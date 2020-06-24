import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`should show correct numbers`, () => {
  const tree = renderer.create(<App gameTime={7} errorCount={4} onWelcomeButtonClick={() => {}}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
