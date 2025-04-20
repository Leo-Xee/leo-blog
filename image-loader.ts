type ImageLoaderProps = {
  src: string;
  width: number;
  quality: number;
};

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
