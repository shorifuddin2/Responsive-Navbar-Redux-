import React from 'react';
import Logo from "../img/logo.png";

const Header = () => {
    return (
        <header className='flexed z-50 w-screen p-5 px-16'>
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>

                <ul className='flex items-center gap-8 ml-auto'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ea'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ea'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ea'>About Us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ea'>Service</li>
                </ul> 
            </div>

            {/* mobile */}
            <div className='flex md:hidden w-full h-full'>

            </div>
        </header>
    );
};

export default Header;