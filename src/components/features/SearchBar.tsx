import { SearchIcon } from 'lucide-react';

type SearchBarProps = {
  className?: string;
};

const SearchBar = ({ className = '' }: SearchBarProps) => {
  return (
    <div
      className={`relative w-full border rounded-xl pl-5xl bg-neutral-950/60 ${className}`}
    >
      <input
        type='text'
        placeholder='Search Movie'
        className='placeholder:text-sm placeholder:text-neutral-500 py-md w-full focus:outline-0'
      />
      <SearchIcon className='absolute size-5 text-neutral-500 top-3 left-4' />
    </div>
  );
};

export default SearchBar;
