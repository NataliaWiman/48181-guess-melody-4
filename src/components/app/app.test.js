import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const gameTime = 15;
const errorCount = 4;

it(`should show correct numbers`, () => {
  const tree = renderer.create(<App gameTime={gameTime} errorCount={errorCount}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
