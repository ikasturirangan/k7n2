"use client"
import ShippingForm from '@/components/shippingcard';
import { Separator } from '@radix-ui/react-separator';
import Showcase from '@/components/showcase';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SiteFooter } from '@/components/footer';
import Header from '@/components/header';

export default function ProductPage() {
  return (
    <>
      <main className="flex flex-col justify-between min-h-screen">
        {/* Top navigation bar that becomes visible on md screens and above */}
        <Header/>
        <Separator className="hidden md:block"/>

        {/* Main section split into two columns on larger screens */}
        <section className="flex flex-col md:flex-row flex-grow">
          {/* Left Column for the showcase */}
          <div className="flex-1 flex items-center justify-center p-4">
            <Showcase/>
          </div>

          <Separator className="md:hidden"/>

          {/* Right Column for the shipping form */}
          <div className="flex-1 flex p-4">
            <ShippingForm/>
          </div>
        </section>
        
        {/* Site Footer */}
        <SiteFooter />
      </main>
    </>
  );
}
