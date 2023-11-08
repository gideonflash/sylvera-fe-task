import Image from "next/image";
import styles from "./hero.module.css";

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} fill={true} style={{ objectFit: "cover" }} />
      <h1 className={styles.heroText}>Header</h1>
    </div>
  );
}
