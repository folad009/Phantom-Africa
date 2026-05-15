import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const LOGO_SRC = "/assets/images/phantom-africa-logo.png";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  linkToHome?: boolean;
};

export function Logo({ className, imageClassName, linkToHome = true }: LogoProps) {
  const image = (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1.5 dark:bg-transparent dark:px-0 dark:py-0",
        className,
      )}
    >
      <img
        src={LOGO_SRC}
        alt="Phantom Africa"
        className={cn("h-12 md:h-14 w-auto object-contain", imageClassName)}
      />
    </span>
  );

  if (!linkToHome) return image;

  return (
    <Link to="/" className="relative z-50 shrink-0 group">
      {image}
    </Link>
  );
}
