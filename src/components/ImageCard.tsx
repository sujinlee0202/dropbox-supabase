"use client";
import { deleteFile } from "@/actions/storageActions";
import { Button } from "@/components/ui/button";
import { queryClient } from "@/config/ReactQueryProvider";
import { formatDate } from "@/utils/formatDate";
import { getImageUrl } from "@/utils/storage";
import { useMutation } from "@tanstack/react-query";
import { Loader, Trash } from "lucide-react";

interface FileProps {
  name: string;
  updated_at: string;
}

export default function ImageCard({ file }: { file: FileProps }) {
  const { mutate, isPending } = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  const handleRemoveCard = () => {
    mutate(file.name);
  };

  return (
    <div className='relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md'>
      {/** Image */}
      <img
        src={getImageUrl(file.name)}
        className='w-full aspect-square rounded-2xl'
      />

      {/** File Name */}
      <p>{file.name}</p>
      <p className='text-gray-300 text-sm'>
        last updated : <span>{formatDate(file.updated_at)}</span>
      </p>

      <Button
        onClick={handleRemoveCard}
        variant='ghost'
        className='cursor-pointer absolute top-2 right-2 p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full'
      >
        {isPending ? (
          <Loader className='animate-spin text-gray-500' />
        ) : (
          <Trash size={18} />
        )}
      </Button>
    </div>
  );
}
