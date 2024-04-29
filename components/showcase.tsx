"use client"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


export default function Showcase() {
  return (
    <>
      
            <div>
             
                <Image 
                
              src="/image4.webp"
              layout="responsive"
              width={300}
              height={300}
              alt="thematteblackcompany Full Metal Wallet"
             />
                           
                
            </div>
         
    </>
  );
}
