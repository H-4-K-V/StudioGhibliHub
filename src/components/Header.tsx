import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: SearchBarProps) {
  return (
    <header className="border-b pb-2 mb-8 border-slate-400">
      <h1 className="font-bebas text-5xl text-slate-800">
        Studio Ghibli
      </h1>
      <p className="text-base mb-8 text-slate-400">
        All works of art in one place
      </p>

      <form className="flex items-center relative">
        <input
          type="text"
          className="w-full border border-slate-400 text-slate-700 rounded-sm px-12 py-3 outline-none placeholder:text-slate-400"
          placeholder="Search by title"
          onChange={(e) =>
            onSearch(e.target.value.toLowerCase())
          }
          spellCheck={false}
        />

        <Search
          size={16}
          color="#90a1b9"
          className="absolute left-4"
        />
      </form>
    </header>
  );
}
