"use client";

import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Trash, Loader } from "lucide-react";
import { uploadFile } from "@/actions/storageActions";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/config/ReactQueryProvider";
import { useDropzone } from "react-dropzone";

export function ImageUploader() {
  const [preview, setPreview] = useState<string[] | null>(null);
  const [file, setFile] = useState<File[] | null>(null); // 파일 상태 저장
  const fileRef = useRef<HTMLInputElement>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
      // 이미지 업로드 후 초기화
      removeImage();
    },
  });

  const handleFile = (selectedFiles: File[]) => {
    setFile(selectedFiles);
    setPreview(selectedFiles.map((file) => URL.createObjectURL(file)));
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFile(acceptedFiles);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
      ? Array.from(event.target.files)
      : [];
    if (selectedFiles.length > 0) {
      handleFile(selectedFiles);
    }
  };

  const removeImage = () => {
    setPreview(null);
    setFile(null); // 파일도 초기화
    if (fileRef.current) fileRef.current.value = ""; // input 리셋
  };

  const handleUpload = () => {
    if (file?.length === 0) {
      return;
    }

    const formData = new FormData();
    file?.forEach((file) => formData.append("files", file));

    mutate(formData); // 파일 업로드 실행
  };

  return (
    <div className='flex flex-col items-center gap-4 p-4 border rounded-lg w-full text-center'>
      <div
        {...getRootProps()}
        className='w-full border-2 border-dashed p-6 rounded-lg cursor-pointer hover:bg-gray-100 flex justify-center items-center'
      >
        <input
          type='file'
          accept='image/*'
          className='hidden'
          onChange={handleFileChange}
          {...getInputProps()}
        />
        {preview && preview.length > 0 ? (
          <div className='flex flex-wrap gap-2'>
            {preview.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Preview ${index}`}
                className='w-24 h-24 object-cover rounded-md'
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center text-gray-500'>
            {isPending ? (
              <Loader className='animate-spin' size={24} />
            ) : (
              <Upload size={24} />
            )}
            {isPending ? (
              <p className='mt-2'>Uploading...</p>
            ) : isDragActive ? (
              <p className='mt-2'>파일을 놓아주세요</p>
            ) : (
              <p className='mt-2'>Click or Drag to Upload</p>
            )}
          </div>
        )}
      </div>
      {preview && preview.length > 0 && (
        <div className='flex gap-4'>
          <Button onClick={handleUpload} disabled={isPending}>
            {isPending ? "Uploading..." : "Upload"}
          </Button>
          <Button
            onClick={removeImage}
            variant='destructive'
            className='flex items-center gap-2 cursor-pointer'
            type='button'
          >
            <Trash size={16} /> Remove All
          </Button>
        </div>
      )}
    </div>
  );
}
