"use client"

import Image from "next/image";
import Footer from '@/components/footer';
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProductPage() {
  return (
    <>
        <main className="flex flex-col justify-between min-h-screen bg-green">
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
        <section className="flex flex-col flex-grow mt-5 mb-5 ml-5 mr-5">
          {/* First row with 3 columns */}
          <div className="flex flex-grow">
            <div className="w-1/3 p-2" style={{ backgroundColor: '#f0f8ff' }}>
            <Image 
              src="/image1.jpg"
              layout="responsive"
              width={300}
              height={300}
              alt="K7N2 Full Metal Wallet"
             />
            </div>
            <Separator orientation="vertical" className="mx-2" />
            <div className="w-1/3 p-2" style={{ backgroundColor: '#faebd7' }}>
            <Image 
              src="/image2.jpg"
              layout="responsive"
              width={300}
              height={300}
              alt="K7N2 Full Metal Wallet"
             />
            </div>
            <Separator orientation="vertical" className="mx-2" />
            <div className="w-1/3 p-2" style={{ backgroundColor: '#f5f5dc' }}>
            <Image 
              src="/image3.jpg"
              layout="responsive"
              width={300}
              height={300}
              alt="K7N2 Full Metal Wallet"
             />
            </div>
          </div>
          {/* Horizontal separator line */}
          <Separator className="my-2" />
          {/* Second row with 3 columns */}
          <div className="flex flex-grow">
            <div className="w-1/3 p-2" style={{ backgroundColor: '#ffe4e1' }}>
            <Image 
              src="/image6.webp"
              layout="responsive"
              width={300}
              height={300}
              alt="K7N2 Full Metal Wallet"
             />
            </div>
            <Separator orientation="vertical" className="mx-2" />
            <div className="w-1/3 p-2" style={{ backgroundColor: '#e6e6fa' }}>
            <Image 
              src="/image4.webp"
              layout="responsive"
              width={300}
              height={300}
              alt="K7N2 Full Metal Wallet"
             />
            </div>
            <Separator orientation="vertical" className="mx-2" />
            <div className="w-1/3 p-2" style={{ backgroundColor: '#fff0f5' }}>
            <Image 
              src="/image5.webp"
              layout="responsive"
              width={300}
              height={300}
              alt="K7N2 Full Metal Wallet"
             />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
