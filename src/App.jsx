import './App.css';

//react
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

//fonts
import './assets/fonts/Roboto-Regular.ttf';
import './assets/fonts/Roboto-Bold.ttf';

//icon
import repeat from './assets/repeat.svg';

//components
import { Input } from './components/Input';

//
function App() {
  const [weeks, setWeeks] = useState();
  const [months, setMonths] = useState();

  function convertToMonths(weeks) {
    setWeeks(weeks);
    setMonths(weeks / 4);
  }

  function convertToWeeks(months) {
    setMonths(months);
    setWeeks(months * 4);
  }

  return (
    <div className='container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Calculator</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name='description' content='Nested component' />
        <style>{'body { background-color: #5F7368; }'}</style>
      </Helmet>

      <h2 className='h2Title'>Pregnancy Calculator</h2>

      <div className='row'>
        <Input
          title='Weeks'
          value={weeks}
          onChange={event => convertToMonths(event.target.value)}
        />

        <button id='exchangeButton'>
          <img id='exchangeIcon' src={repeat} alt='Exchange' />
        </button>

        <Input
          title='Months'
          value={months}
          onChange={event => convertToWeeks(event.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
