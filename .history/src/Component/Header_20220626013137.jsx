import React from 'react';

const Header = () => {
    return (
        <div className='flexed w-screen bg-slate-300 text-rose-700 p-5 px-16'>
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full bg-red-600 p-4'></div>
            {/*  */}
            <div className='hidden md:flex w-full h-full bg-red-600 p-4'></div>
        </div>
    );
};

export default Header;