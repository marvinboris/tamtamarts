import Image, { ImageProps } from "next/image";

export default function Logo({
  width,
  height,
  ...props
}: Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      width={500}
      height={500}
      src="/logo.svg"
      alt="Logo TamTamArts"
      {...props}
    />
  );
}
