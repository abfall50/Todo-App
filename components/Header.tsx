import Image from 'next/image'
import Sun from '../public/icon-sun.svg'

const Header = () => {
  return (
    <>
      <div className="w-full h-[11% flex justify-between items-center">
        <span className="text-3xl font-medium font-['Josefin_Sans'] text-white tracking-widest">TODO</span>
        <button><Image src={Sun} alt="Sun" /></button>
      </div>
    </>
  );
};

export default Header;
