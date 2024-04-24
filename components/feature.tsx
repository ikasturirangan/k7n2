import { ShieldOff, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export const Feature = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge className="font-bold" variant={"outline"}>Now Shipping Worldwide</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
              Meet the Ultimate Wallet
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight font-bold text-gray-500 text-left">
              The perfect balance between style and functionality.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <Card className="flex justify-between flex-col lg:col-span-2 lg:row-span-2"> 
            <CardHeader> 
              <Image 
                className="rounded-sm"
                src="/image6.webp"
                layout="responsive"
                width={300}
                height={300}
                alt="K7N2 Full Metal Wallet"
              />
            </CardHeader>
            <CardFooter> 
              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-tight">Minimalist Storage</h3>
                <p className="text-gray-500 max-w-xs text-base">
                  Carry everything you need in a compact, efficient space. Supports up to 12 Cards.
                </p>
              </div>
            </CardFooter>
          </Card>

          <Card className=" aspect-square flex justify-between flex-col"> 
            <CardHeader> 
              <Image 
                className="rounded-sm"
                src="/image5.webp"
                layout="responsive"
                width={300}
                height={300}
                alt="K7N2 Full Metal Wallet"
              />
            </CardHeader>
            <CardFooter> 
              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-tight">RFID Blocking</h3>
                <p className="text-gray-500 max-w-xs text-base">
                  Protect your personal information with built-in RFID blocking technology.
                </p>
              </div>
            </CardFooter>
          </Card>

          <Card className="h-full rounded-md aspect-square flex justify-between flex-col lg:col-span-2"> 
            <CardContent> 
              <Image 
                className="rounded-sm"
                src="/image3.jpg"
                layout="responsive"
                width={300}
                height={300}
                alt="K7N2 Full Metal Wallet"
              />
            </CardContent>
            <CardFooter> 
              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-tight">Premium Materials</h3>
                <p className="text-gray-500 max-w-xs text-base">
                  Crafted with high-quality metals for durability and a sleek, modern look.
                </p>
              </div>
            </CardFooter>
          </Card>

          <Card className=" aspect-square flex justify-between flex-col"> 
            <CardHeader> 
              <Image 
                className="rounded-sm"
                src="/image4.webp"
                layout="responsive"
                width={300}
                height={300}
                alt="K7N2 Full Metal Wallet"
              />
            </CardHeader>
            <CardFooter> 
              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-tight">Slim Profile</h3>
                <p className="text-gray-500 max-w-xs text-base">
                  Ultra-thin design makes it easy to carry in any pocket without bulk.
                </p>
              </div>
            </CardFooter>
          </Card>

          <Card className=" aspect-square flex justify-between flex-col"> 
            <CardHeader> 
              <Image 
                className="rounded-sm"
                src="/image7.webp"
                layout="responsive"
                width={300}
                height={300}
                alt="K7N2 Full Metal Wallet"
              />
            </CardHeader>
            <CardFooter> 
              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-tight">Water Resistant</h3>
                <p className="text-gray-500 max-w-xs text-base">
                  Engineered to withstand the elements, keeping your essentials safe in any weather.
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
