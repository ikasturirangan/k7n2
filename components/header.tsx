"use client"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from 'next/link'; // Import Link from next/link

export default function Header() {
  return (
    <>
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-black">K7N2</h2>
          <div>
            {/* Wrap the Button with Next.js Link for navigation */}
            <Link href="/checkout" passHref>
              {/* passHref will pass the href to the child component, making it clickable */}
              <Button variant="outline" className="font-bold text-sm "> Buy Now </Button>
            </Link>
          </div>
        </div>
        <Separator />
      </div>
    </>
  );
}
