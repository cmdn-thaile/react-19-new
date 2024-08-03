'use client';

/* eslint-disable react/prop-types */
import { Suspense, use } from 'react';
import { fetchPerson } from '../util/fetchPersion';

export function Person() {
  const person = use(fetchPerson());

  return <h1>{person.name}</h1>;
}

export function Persons() {
  return (
    <>
      <h1>Your user name here:</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Person />
      </Suspense>
    </>
  );
}
