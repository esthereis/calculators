import { Input } from '../Input';
import { useState } from 'react';
//icon
import repeat from '../../assets/repeat.svg';

export function PregnancyCalculator() {
  const [weeks, setWeeks] = useState();
  const [months, setMonths] = useState();
  const [rowClassName, setRowClassName] = useState('row');

  function convertToMonths(weeks) {
    setWeeks(weeks);
    setMonths(weeks / 4);
  }

  function convertToWeeks(months) {
    setMonths(months);
    setWeeks(months * 4);
  }
  return (
    <>
      <h2 className='h2Title'>Pregnancy Calculator</h2>

      <div className={rowClassName}>
        <Input
          title='Weeks'
          value={weeks}
          onChange={event => convertToMonths(event.target.value)}
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

        <Input
          title='Months'
          value={months}
          onChange={event => convertToWeeks(event.target.value)}
        />
      </div>
    </>
  );
}
