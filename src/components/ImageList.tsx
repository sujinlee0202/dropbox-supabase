"use client";

import { useQuery } from "@tanstack/react-query";
import ImageCard from "./ImageCard";
import { searchFiles } from "@/actions/storageActions";

export default function ImageList({ searchInput }: { searchInput: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchInput], // images/{searchInput} 데이터 캐싱
    queryFn: async () => searchFiles(searchInput),
  });

  return (
    <section className='grid md:grid-cols-3 lg:grid-col-4 grid-cols-2'>
      {isLoading && <p>Loading...</p>}
      {data && data.map((file) => <ImageCard key={file.id} file={file} />)}
    </section>
  );
}
