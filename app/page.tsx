"use client"
import { Separator } from "@radix-ui/react-select";
import { SiteFooter } from "@/components/footer";
import { Hero } from "@/components/hero";
import { OrderNow } from "@/components/ordernow";
import { Feature } from "@/components/newfeatures";
import Header from "@/components/header";
import Head from 'next/head'; // Correct assumption that you are using Next.js

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Head>
        <title>The Matte Black Company - Home</title>
        <meta name="description" content="The Matte Black Company is a global designer and manufacturer of premium everyday carry, fashion accessories, and desk essentials. Explore our unique products!" />
        <meta name="keywords" content="premium, fashion accessories, everyday carry, desk essentials, designer products" />
        <meta property="og:title" content="The Matte Black Company - Home" />
        <meta property="og:description" content="Discover exclusive and high-quality products designed for everyday elegance. Visit us now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thematteblackcompany.com/" />
        <meta property="og:image" content="https://www.thematteblackcompany.com/images/og-image.jpg" />
        <link rel="canonical" href="https://www.thematteblackcompany.com/" />
      </Head>
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Hero />
        <Feature />
        <OrderNow />
      </main>
      <Separator />
      <SiteFooter />
    </div>
  )
}
