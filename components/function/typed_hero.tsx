'use client';

import React from 'react';
import { ReactTyped } from 'react-typed';

export default function TypedHero() {
  return (
    <>
      <h1 className="font-bold tracking-tighter sm:text-7xl text-5xl ">
        We are{' '}
        <span>
          <ReactTyped
          
            strings={[
              'Code for Cause ',
              'a non-profit organization 🌐',
              'brigding the digital divide 💻',
            ]}
            typeSpeed={100}
            backSpeed={10}
            loop
          ></ReactTyped>
        </span>
      </h1>
    </>
  );
}
