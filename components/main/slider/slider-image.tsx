import Image from "next/image";

export default function SliderImage({ src }: any) {
  return (
    <Image
      alt="image"
      src={src}
      fill
      sizes="100vh"
      style={{
        objectFit: "cover",
      }}
      quality={100}
      unoptimized
    />
  );
}
