export function Input({ title, value, onChange }) {
  return (
    <div className='inputGroup'>
      <input type='text' placeholder='0' value={value} onChange={onChange} />

      <label>{title}</label>
    </div>
  );
}
