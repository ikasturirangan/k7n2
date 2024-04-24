"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";

import { Separator } from "@radix-ui/react-select";
import { SiteFooter } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Feature } from "@/components/feature";
import { ModeToggle } from "@/components/mode-toggle";
import { OrderNow } from "@/components/ordernow";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
      <h2 className="font-black">K7N2</h2>
      <div className="flex items-center gap-4">
        <ModeToggle/>
        <Link href="/checkout" passHref>
          <Button className="font-bold" variant={"outline"}>
            Order Now
          </Button>
        </Link>
      </div>
    </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
       <Hero/>
       <Feature/>
       <OrderNow/>
      </main>
      <Separator/>
     <SiteFooter/>
    </div>
  )
}
