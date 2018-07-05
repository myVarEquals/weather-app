import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY = 'd6cacabe8d6ebebebba534d4b6435938';


class App extends React.Component {

  getWeather = async () => {
    const API_CALL = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);

    
  }

  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
