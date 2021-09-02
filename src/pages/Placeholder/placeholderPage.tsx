import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PlaceholderPage() {
  return (
    <>
      <h2><NavLink to="/">Main</NavLink></h2>
      <h2>PlaceholderPage</h2>
    </>
  );
}
