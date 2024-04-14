"use client"

import Footer from '@/components/footer';
import ShippingForm from '@/components/shippingcard';
import { Separator } from '@radix-ui/react-separator';
import Showcase from '@/components/showcase';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


export default function ProductPage() {
 

  return (
    <>
      
      <main className="flex flex-col justify-between min-h-screen">
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-black">K7N2</h2>
          <div>
            {/* Wrap the Button with Next.js Link for navigation */}
            <Link href="/" passHref>
              {/* passHref will pass the href to the child component, making it clickable */}
              <Button variant="outline" className="font-bold text-sm "> Back </Button>
            </Link>
          </div>
        </div>
        <Separator />
      </div>
      
        <section className="flex">
          {/* Left Column */}
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <Showcase/>
          </div>

         <Separator/>
          

          {/* Right Column */}
          <div className="flex-1 flex flex-col p-4">
            
          
          <ShippingForm/>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}
