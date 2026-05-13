import Image from "next/image";
import iconAsset from "@/assets/icon.png";
import logoAsset from "@/assets/logo.png";

type BrandLogoProps = {
  variant: "wordmark" | "icon";
  className?: string;
  priority?: boolean;
};

const config = {
  wordmark: {
    src: logoAsset,
    width: 160,
    height: 48,
    imgClass: "w-40 h-auto",
    sizes: "160px",
  },
  icon: {
    src: iconAsset,
    width: 40,
    height: 40,
    imgClass: "w-10 h-10",
    sizes: "40px",
  },
} as const;

export function BrandLogo({
  variant,
  className = "",
  priority,
}: BrandLogoProps) {
  const c = config[variant];
  return (
    <Image
      src={c.src}
      alt="Cartwave"
      width={c.width}
      height={c.height}
      sizes={c.sizes}
      priority={priority ?? variant === "wordmark"}
      className={`${c.imgClass} object-contain ${className}`}
    />
  );
}
