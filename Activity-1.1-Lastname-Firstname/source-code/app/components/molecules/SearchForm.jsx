'use client';
import { useState } from 'react';
import Icon from '../atoms/Icon';

export default function SearchForm({ onSearch }) {
  const [value, setValue] = useState('');
  return (
    <form className="search" onSubmit={(e) => { e.preventDefault(); onSearch?.(value); }}>
      <Icon name="search" />
      <input value={value} onChange={(e) => setValue(e.target.value)}
        placeholder="Search heritage sites" aria-label="Search heritage sites" />
      <button className="button" type="submit">Search</button>
    </form>
  );
}
