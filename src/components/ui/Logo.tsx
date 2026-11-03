import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${className}`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={160}
        height={48}
        className="h-9 w-auto sm:h-12"
        priority
      />
      <span className="truncate text-base font-bold text-ink sm:text-lg">
        {site.name}
      </span>
    </Link>
  );
}
