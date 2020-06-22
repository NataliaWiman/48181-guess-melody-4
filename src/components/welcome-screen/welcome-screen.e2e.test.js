import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`should register a click on button`, () => {
  const onWelcomeButton = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen gameTime={7} errorCount={4} onClick={onWelcomeButton}/>
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(onWelcomeButton).toBeCalled();
});
