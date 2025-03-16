"use client";

import { useState } from "react";
import ImageList from "./ImageList";
import { ImageUploader } from "./ImageUploader";
import { SearchInput } from "./SearchInput";

export default function MiniboxUI() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      {/** Search Input */}
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />

      {/** Image Drop Zone */}
      <ImageUploader />

      {/** Image List */}
      <ImageList searchInput={searchInput} />
    </>
  );
}
