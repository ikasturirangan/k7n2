import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const SiteFooter = () => {
  return (
    <div className="w-full py-10 lg:py-10 border-t">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-10 items-center justify-center text-center">
          {/* First Column for Brand Name and Slogan */}
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-md md:text-md tracking-tighter max-w-md font-black">
              K7N2
            </h2>
            <p className="text-sm max-w-lg leading-relaxed tracking-tight font-bold text-gray-500">
              Premium Everyday Carry Designed on Earth.
            </p>
          </div>
          {/* Second Column for Legal Links */}
          <div className="flex flex-col gap-2 items-center text-sm max-w-lg leading-relaxed tracking-tight">
            <Link href="/terms">
              <p className="font-semibold">Terms of Service</p>
            </Link>
            <Link href="/privacy">
              <p className="font-semibold">Privacy Policy</p>
            </Link>
          </div>
          {/* Third Column for Instagram Link */}
          <div className="flex flex-col items-center">
            <Link href="https://www.instagram.com">
              <p className="font-bold" rel="noopener noreferrer">
                <InstagramLogoIcon aria-label="Instagram"/> 
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
