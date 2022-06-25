import React from 'react';
import Logo from "../img/logo.png";

const Header = () => {
    return (
        <div className='flexed z-50 w-screen p-5 px-16'>
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className='text-headingColor text-xl font-bold'></p>
                </div>
            </div>

            {/* mobile */}
            <div className='flex md:hidden w-full h-full'>

            </div>
        </div>
    );
};

export default Header;