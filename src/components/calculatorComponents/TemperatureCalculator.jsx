import { Select } from '../Select';
import { useState } from 'react';
//icon
import repeat from '../../assets/repeat.svg';

export function TemperatureCalculator() {
  const [celsius, setCelsius] = useState();
  const [farenheit, setFarenheit] = useState();
  const [kelvin, setKelvin] = useState();
  const [selecBase, setSelectBase] = useState();
  const [selectTarget, setSelectTarget] = useState();
  const [rowClassName, setRowClassName] = useState('row');

  //
  function celsiusToFarenheit(celsius) {
    setCelsius(celsius);
    setFarenheit(celsius * 1.8 + 32);
  }

  //
  function farenheitToCelsius(farenheit) {
    setFarenheit(farenheit);
    setCelsius((farenheit - 32) / 1.8);
  }

  function celsiusToKelvin(celsius) {
    setCelsius(celsius);
    setKelvin(celsius + 273.15);
  }

  function kelvinToCelsius(kelvin) {
    setKelvin(kelvin);
    setCelsius(kelvin - 273.15);
  }

  return (
    <>
      <h2 className='h2Title'>Temperature Calculator</h2>

      <div className={rowClassName}>
        <Select
          title='Celsius'
          value={celsius}
          onChange={event => celsiusToFarenheit(event.target.value)}
          onSelect={event => setSelectBase(event.target.value)}
        />

        <button
          class='exchangeButton'
          onClick={() =>
            rowClassName === 'row'
              ? setRowClassName('rowReverse')
              : setRowClassName('row')
          }
        >
          <img class='exchangeIcon' src={repeat} alt='Exchange' />
        </button>

        <Select
          title='Farenheit'
          value={farenheit}
          onChange={event => farenheitToCelsius(event.target.value)}
        />
      </div>
    </>
  );
}
