"use client" 
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="text-sm text-gray-800 dark:text-gray-800"> 
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p className='font-black'>
            K7N2 
          </p>
          <p className='font-bold ml-2'> Designed on Earth</p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p className='font-bold'>All rights reserved.</p>
          <p className="md:ml-auto"> 
            <Link href={'https://www.instagram.com/'}> 
             <InstagramLogoIcon className='w-5 h-5 stroke-bold'/>
            </Link> 
          </p> 
        </div>
      </div>
    </footer>
  );
}
