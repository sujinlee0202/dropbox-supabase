"use client";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function ImageCard() {
  const handleRemoveCard = () => {};

  return (
    <div className='relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md'>
      {/** Image */}
      <img
        src='/images/dropbox_icon.png'
        className='w-full aspect-square rounded-2xl'
      />

      {/** File Name */}
      <p>image.png</p>

      <Button
        onClick={handleRemoveCard}
        variant='ghost'
        className='cursor-pointer absolute top-2 right-2 p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full'
      >
        <Trash size={18} />
      </Button>
    </div>
  );
}
