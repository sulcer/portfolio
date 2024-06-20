'use client';
import React, { useState } from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Link from 'next/link';
import Image from 'next/image';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import logoLight from '@/public/images/logo-transperent.png';
import logoDark from '@/public/images/logo-transperent-white.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-row justify-between items-center font-medium p-4">
      <Link href="" className="flex items-center gap-x-3 cursor-pointer">
        <Image
          src={logoDark}
          alt="logo"
          className="h-8 w-8 hidden dark:block"
        />
        <Image
          src={logoLight}
          alt="logo"
          className="h-8 w-8 block dark:hidden"
        />
        <div className="text-xl font-semibold">sulcer</div>
      </Link>

      <div className="hidden md:flex text-sm flex-row gap-x-7 items-center">
        <Link href="#projects">Projects</Link>
        <Link href="#technologies">Technologies</Link>
        <ModeToggle />
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <HiXMark className="h-6 w-6" />
          ) : (
            <HiBars3 className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-transparent md:hidden flex flex-col items-center space-y-4 z-50 opacity-80">
          <Link href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="#technologies" onClick={() => setIsOpen(false)}>
            Technologies
          </Link>
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Nav;
