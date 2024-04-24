"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";

import { Separator } from "@radix-ui/react-select";
import { SiteFooter } from "@/components/footer";
import { Hero } from "@/components/hero";

import { ModeToggle } from "@/components/mode-toggle";
import { OrderNow } from "@/components/ordernow";
import { Feature } from "@/components/newfeatures";
import Header from "@/components/header";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
    <Header/>
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
