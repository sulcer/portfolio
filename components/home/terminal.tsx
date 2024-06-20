'use client';
import React, { useEffect, useState } from 'react';
import { HiChevronUpDown, HiMinus, HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';

const Terminal = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [date, setDate] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const currentDate = new Date().toUTCString();
    setDate(currentDate);
  }, []);

  return (
    <div className="rounded-xl sm:h-[600px] h-[250px]  w-full mx-auto bg-black text-white font-mono">
      <div className="flex items-center p-2 bg-gray-800 rounded-t-xl">
        <div
          className="flex space-x-2 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            {isHovered && <HiXMark size={12} color={'gray'} />}
          </div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center">
            {isHovered && <HiMinus size={12} color={'gray'} />}
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
            {isHovered && (
              <HiChevronUpDown
                size={12}
                color={'gray'}
                className={'-rotate-45'}
              />
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <pre className="whitespace-pre-wrap">
          <span className="text-green-400">Last login: {date}</span>
          <br />
          <span className="text-white">root:~$</span>{' '}
          <Link href={'https://github.com/sulcer'} className="hover:font-bold">
            github
          </Link>
          <br />
          <span className="text-white">root:~$</span>{' '}
          <Link
            href={'https://www.linkedin.com/in/gregor-sulcer/'}
            className="hover:font-bold"
          >
            linkedin
          </Link>
          <br />
          <span className="text-white">root:~$</span>{' '}
          <span className="hover:font-bold">sulcer.dev@gmail.com</span>
          <br />
          <div className={'flex'}>
            <span className="text-white">root:~$</span>
            <PlaceholdersAndVanishInput
              placeholders={[]}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
