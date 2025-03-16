import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Props {
  searchInput: string;
  setSearchInput: (value: string) => void;
}

export function SearchInput({ searchInput, setSearchInput }: Props) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className='relative w-full'>
      <Input
        type='text'
        placeholder='Search Images'
        value={searchInput}
        onChange={handleInput}
      />
      <Search
        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
        size={18}
      />
    </div>
  );
}
