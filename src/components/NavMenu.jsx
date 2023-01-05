export function NavMenu({ onMenuChange }) {
  return (
    <nav className='sideBar'>
      <h3>Menu</h3>
      <p onClick={() => onMenuChange('pregancyCalculator')}>
        Pregnancy Calculator
      </p>
    </nav>
  );
}
