import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="w-full overflow-hidden">
      <Link href="/research" passHref>
        <div className="relative cursor-pointer group">
          <Image
            src="/banner.jpeg"
            alt="Department Highlight Banner"
            width={1200}
            height={400}
            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
            priority
          />
          {/* Optional overlay text */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-semibold">
              Explore Our Research Highlights
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
