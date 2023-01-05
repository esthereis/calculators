export function Select({ value, onChange, selectValue, onSelect }) {
  return (
    <div className='inputGroup'>
      <input type='text' placeholder='0' value={value} onChange={onChange} />

      <select name='temperatureTitle' value={selectValue} onSelect={onSelect}>
        <option value='farenheit'>Farenheit</option>
        <option value='celsius'>Celsius</option>
        <option value='kelvin'>Kelvin</option>
      </select>
    </div>
  );
}
