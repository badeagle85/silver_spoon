import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="ml-1 mr-3 flex h-[50px] items-center justify-between bg-white">
      <div className="flex flex-row items-center">
        <Link href="/">
          <div className="relative flex h-[50px] w-[50px] items-center  justify-center overflow-hidden  bg-white ">
            <div className="flex h-[20px] w-[20px] origin-center flex-col justify-between overflow-hidden">
              <div className="h-[2px] w-7 bg-gray-300 "></div>
              <div className="h-[2px] w-7 bg-gray-300 "></div>
              <div className="h-[2px] w-7 bg-gray-300 "></div>
            </div>
          </div>
        </Link>

        <Link href="/" className="text-[20px] font-bold">
          은수저
        </Link>
      </div>
      <div className="text-gray-500">
        <Link href="/login" className="mr-[5px]">
          로그인
        </Link>
        <button className="mr-[5px] w-[40px] ">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="mr-[5px] w-[40px]">
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
    </header>
  );
};

export default Header;
