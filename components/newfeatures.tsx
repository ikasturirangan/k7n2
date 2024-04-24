
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
export const Feature = () => (
  <div className="w-full py-10 lg:py-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="h-full lg:col-span-2  aspect-square lg:aspect-auto flex justify-between flex-col"> 
            <CardHeader> 
           
            </CardHeader>
            <CardFooter> 
            <div className="flex flex-col">
              <h3 className="text-lg font-bold tracking-tight">Minimalist Storage</h3>
              <p className="text-muted-foreground text-sm font-bold text-base">
                 Carry everything you need in a compact, efficient space. Supports up to 12 Cards.
              </p>
            
          </div>
            </CardFooter>
            
            </Card>
        <Card className=" aspect-square flex justify-between flex-col"> 
            <CardHeader> 
            
            </CardHeader>
            <CardFooter> 
            <div className="flex flex-col">
              <h3 className="text-lg tracking-tight font-semibold">RFID Blocking</h3>
              <p className="text-muted-foreground text-sm font-semibold text-base">
              Protect your personal information with built-in RFID blocking technology.
              </p>
            </div>
            </CardFooter>
        </Card>
        <Card className=" aspect-square  flex justify-between flex-col"> 
            <CardHeader> 
            
            </CardHeader>
            <CardFooter> 
            <div className="flex flex-col">
            <h3 className="text-lg tracking-tight font-semibold">RFID Blocking</h3>
              <p className="text-muted-foreground text-sm font-semibold text-base">
              Protect your personal information with built-in RFID blocking technology.
              </p>
            </div>
            </CardFooter>
        </Card>

        <Card className=" h-full lg:col-span-2  aspect-square lg:aspect-auto flex justify-between flex-col"> 
            <CardHeader> 
            
            </CardHeader>
            <CardFooter> 
            <div className="flex flex-col">
            <h3 className="text-lg tracking-tight font-semibold">RFID Blocking</h3>
              <p className="text-muted-foreground text-sm font-semibold text-base">
              Protect your personal information with built-in RFID blocking technology.
              </p>
            </div>
            </CardFooter>
        </Card>
         
        </div>
      </div>
    </div>
  </div>
);