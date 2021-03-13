import Button from './Button';

const Header = ({ title }) => {
  function addItemClick() {
    console.log('Click!!!');
  }

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button color='green' text='Add' onClick={addItemClick} />
    </header>
  );
};

export default Header;
