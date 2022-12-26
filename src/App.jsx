import './App.css';

//fonts
import './assets/fonts/Roboto-Regular.ttf';
import './assets/fonts/Roboto-Bold.ttf';
import repeat from './assets/repeat.svg';
import { Input } from './components/Input';

function App() {
  return (
    <div className='container'>
      <h2 className='h2Title'>Pregnancy Calculator</h2>

      <div className='row'>
        <Input title='Weeks' />
        <img src={repeat} alt='Exchange' />
        <Input title='Months' />
      </div>
    </div>
  );
}

export default App;
