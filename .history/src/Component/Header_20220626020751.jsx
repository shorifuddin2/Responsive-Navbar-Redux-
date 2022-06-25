import React from 'react';

const Header = () => {
    return (
        <div className='flexed z-50 w-screen p-5 px-16'>
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full'>
                
            </div>

            {/* mobile */}
            <div className='flex md:hidden w-full h-full'>

            </div>
        </div>
    );
};

export default Header;