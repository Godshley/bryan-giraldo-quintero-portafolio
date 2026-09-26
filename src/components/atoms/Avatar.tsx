import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-12 w-12",
  md: "h-24 w-24",
  lg: "h-40 w-40",
};

const sizePixels = {
  sm: 48,
  md: 96,
  lg: 160,
};

export default function Avatar({
  src,
  alt,
  size = "md",
}: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={sizePixels[size]}
      height={sizePixels[size]}
      className={`${sizeClasses[size]} rounded-full object-cover shadow-md`}
    />
  );
}