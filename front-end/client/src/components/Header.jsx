import avatar from '../assets/avatar.png';
import logo from '../assets/logo.png';

const Header = () => {

  return (
    <div className="py-4 shadow-md bg-white px-2">
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <img src={logo} className='w-10 sm:w-14' />

        <div className='flex items-center gap-4'>

          {/* Info */}
          <div className='text-right'>
            <p className='text-gray-600 italic text-xs md:text-base'>Handicrafted by</p>
            <p className='text-xs md:text-base'>Jim HLS</p>
          </div>

          {/* Avatar */}
          <img src={avatar} className='w-10 sm:w-14' />

        </div>
      </div>
    </div>
  );
};

export default Header;