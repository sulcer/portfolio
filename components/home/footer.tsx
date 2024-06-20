import React from 'react';

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className={'text-center text-sm text-slate-500'}>
      &copy; {getYear()} Gregor Sulcer
    </footer>
  );
};

export default Footer;
