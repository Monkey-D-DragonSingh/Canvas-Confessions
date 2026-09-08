"use client";

import Image, { type ImageProps } from "next/image";
import cloudinaryLoader from "@/app/lib/cloudinary-loader";

export default function PaintingImage({ alt, ...props }: Omit<ImageProps, "loader">) {
  const isCloudinary = typeof props.src === "string"
    && props.src.startsWith("https://res.cloudinary.com/daldbatl/image/upload/");

  return <Image {...props} alt={alt} loader={isCloudinary ? cloudinaryLoader : undefined} />;
}
