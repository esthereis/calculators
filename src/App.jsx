import './App.css';

//react
import { Helmet } from 'react-helmet';

//fonts
import './assets/fonts/Roboto-Bold.ttf';
import './assets/fonts/Roboto-Regular.ttf';

//icon

//components
import { PregnancyCalculator } from './components/calculatorComponents/PregnancyCalculator';
import { NavMenu } from './components/NavMenu';
import { TemperatureCalculator } from './components/calculatorComponents/TemperatureCalculator';

//
function App() {
  return (
    <div className='container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Calculator</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name='description' content='Nested component' />
        <style>{'body { background-color: #5F7368; }'}</style>
      </Helmet>

      <NavMenu />

      <PregnancyCalculator />
      <TemperatureCalculator />
    </div>
  );
}

export default App;
