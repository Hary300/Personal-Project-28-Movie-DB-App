import Logo from '../common/Logo';
import OffCanvasMenu from '../common/OffCanvasMenu';
import OffCanvasSearch from '../common/OffCanvasSearch';
import SearchBar from '../features/SearchBar';
import Container from './Container';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Container className='flex justify-between items-center h-16 md:h-25 lg:h-0 '>
        <div className='flex items-center gap-8xl'>
          <Logo />
          <div className='hidden md:flex md:gap-6xl'>
            <Link to='/'>
              <p className='font-regular text-neutral-25 text-md'>Home</p>
            </Link>
            <Link to='/favorite'>
              <p className='font-regular text-neutral-25 text-md'>Favorite</p>
            </Link>
          </div>
        </div>
        <div className='flex gap-3xl'>
          <OffCanvasSearch className='md:hidden' />
          <OffCanvasMenu className='md:hidden' />
          <SearchBar className='hidden md:block' />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
