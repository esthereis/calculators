export function Input({ title }) {
  return (
    <div className='inputGroup'>
      <input type='text' placeholder='0' />

      <label>{title}</label>
    </div>
  );
}
