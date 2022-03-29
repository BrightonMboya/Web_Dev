import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
        console.log('object')
    }
  return (
   <header className='header'>
       <h1 className='text-3xl'>{title}</h1>
       <Button color='green' text='Add' onCLick = {onClick}/>
       
   </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',  
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header