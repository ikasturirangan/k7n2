
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image'; // Import the Image component
import Link from "next/link";

export const Hero = () => (
  <div className="w-full relative overflow-hidden"> {/* Set position relative to contain the absolute image */}
    <Image
    className="rounded-sm"
      src="/banner.webp" // Path to your image file
      layout="fill" // Makes the image fill the container
      objectFit="cover" // Cover the container without distorting the image
      objectPosition="center" // Center the image within the element
      alt="Background" // Provide an alternative text for the image
      priority // Use priority to preload the hero image on the home page
    />
    <div className="container  relative"> {/* z-index to ensure content is above the image */}
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Badge className="font-bold text-white bg-black"> 🚀 Launch Price $ 39.99</Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-5xl max-w-2xl tracking-tighter text-center font-bold text-white">
            Secure Your Essentials
          </h1>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="https://buy.stripe.com/test_7sI5nve8QePhewEbII"> 
          <Button size="lg" className="gap-2 font-bold bg-black text-white">
            Order Now
          </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
