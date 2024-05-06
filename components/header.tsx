"use client"
import { useEffect, useState } from 'react';
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Link from 'next/link';

export default function Header() {
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);

  useEffect(() => {
    // Manually checking the URL to set the state; not recommended as it doesn't react to Next.js routing changes
    const path = window.location.pathname;
    setIsCheckoutPage(path === '/checkout');
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50   top-0 flex h-16 items-center gap-4 border-b  bg-background  px-4 md:px-6 justify-between">
        <h2 className="font-bold">the matte black company</h2>
        <div className="flex items-center gap-4">
          <ModeToggle/>
          <Link href={"https://buy.stripe.com/9AQ15Z83aaYFctG5kk"}>
            <Button className="font-bold" variant="outline">
              {isCheckoutPage ? 'Back' : 'Order Now'}
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
}
