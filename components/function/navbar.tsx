import React from 'react';
import Image from 'next/image';
import c4clogo from '@/app/images/c4clogo.svg';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className=" z-50 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-60 fixed w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image src={c4clogo} alt="Code 4 Cause" width={90} height={40} />
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" className="text-sm font-medium">
                <Link href="/aboutus">About Us</Link>
              </Button>
              <Button
                asChild
                className="text-sm font-medium bg-black text-white hover:bg-black/90"
              >
                <Link href="/#bam">Book a meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
