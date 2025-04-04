import { Header } from './components/Header';
import { Main } from './components/Main';
import { useState } from 'react';

export function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="max-w-5xl px-4 py-8 m-auto ">
      <Header onSearch={setSearch} />
      <Main search={search} />
    </div>
  );
}
