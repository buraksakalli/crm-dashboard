import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {
  width?: number | string;
  height?: number | string;
  showLoader?: boolean;
}

export function Image({ width = '100%', height = '100%', showLoader = true, ...props }: ImageProps) {
  const convertImage = (width: number | string, height: number | string) => `
  <svg width="${width}px" height="${height}px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#125da9" offset="20%" />
        <stop stop-color="#7292bb" offset="50%" />
        <stop stop-color="#125da9" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="#125da9" />
    <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

  return (
    <NextImage
      placeholder={showLoader ? 'blur' : 'empty'}
      blurDataURL={showLoader ? `data:image/svg+xml;base64,${toBase64(convertImage(width, height))}` : ''}
      width={width}
      height={height}
      {...props}
    />
  );
}
