"use client";

import ImageList from "./ImageList";
import { ImageUploader } from "./ImageUploader";
import { SearchInput } from "./SearchInput";

export default function MiniboxUI() {
  return (
    <>
      {/** Search Input */}
      <SearchInput />

      {/** Image Drop Zone */}
      <ImageUploader />

      {/** Image List */}
      <ImageList />
    </>
  );
}
