import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Image, Trash } from "lucide-react";

export function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => setPreview(null);

  return (
    <div className='flex flex-col items-center gap-4 p-4 border rounded-lg w-full text-center'>
      <label className='w-full border-2 border-dashed p-6 rounded-lg cursor-pointer hover:bg-gray-100'>
        <input
          type='file'
          accept='image/*'
          className='hidden'
          onChange={handleFileChange}
        />
        {preview ? (
          <img
            src={preview}
            alt='Preview'
            className='w-full h-32 object-cover rounded-md'
          />
        ) : (
          <div className='flex flex-col items-center text-gray-500'>
            <Upload size={24} />
            <p className='mt-2'>Click to Upload</p>
          </div>
        )}
      </label>
      {preview && (
        <Button
          onClick={removeImage}
          variant='destructive'
          className='flex items-center gap-2'
        >
          <Trash size={16} /> Remove
        </Button>
      )}
    </div>
  );
}
