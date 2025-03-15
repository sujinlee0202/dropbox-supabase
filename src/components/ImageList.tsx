"use client";

import ImageCard from "./ImageCard";

export default function ImageList() {
  return (
    <section className='grid md:grid-cols-3 lg:grid-col-4 grid-cols-2'>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </section>
  );
}
