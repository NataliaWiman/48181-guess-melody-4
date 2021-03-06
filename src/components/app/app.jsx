import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

// eslint-disable-next-line react/prop-types
const App = ({gameTime, errorCount}) => {

  return <WelcomeScreen time={gameTime} errorCount={errorCount} />;

};

export default App;
