import type { ImageLoaderProps } from "next/image";

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  // Resize at the CDN instead of fetching a full original through Next's optimizer.
  return src.replace(
    /\/image\/upload\/(?:f_auto,q_auto\/)?/,
    `/image/upload/f_auto,q_${quality ?? 75},c_limit,w_${width}/`,
  );
}
