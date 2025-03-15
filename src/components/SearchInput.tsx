import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className='relative w-full'>
      <Input type='text' placeholder='Search Images' />
      <Search
        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
        size={18}
      />
    </div>
  );
}
