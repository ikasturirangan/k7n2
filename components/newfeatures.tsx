
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card > 
            <CardHeader> 
            <Image 
                className="rounded-sm"
                src="/Image.webp"
                layout="responsive"
                width={300}
                height={300}
                alt="thematteblackcompany Full Metal Wallet"
              />
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
        <Card> 
            <CardHeader> 
            <Image 
                className="rounded-sm"
                src="/more.jpg"
               layout="responsive"
                width={300}
                height={300}
                alt="thematteblackcompany Full Metal Wallet"
              />
            </CardHeader>
            <CardFooter> 
            <div className="flex flex-col">
              <h3 className="text-lg tracking-tight font-bold">Premium Material</h3>
              <p className="text-muted-foreground text-sm font-semibold text-base">
              Crafted from high-quality metals and fabrics, our wallets are not only stylish but also durable and environmentally friendly.
              </p>
            </div>
            </CardFooter>
        </Card>
        <Card > 
            <CardHeader> 
            <Image 
                className="rounded-sm"
                layout="responsive"
                src="/22.webp"
                width={300}
                height={300}
                alt="thematteblackcompany Full Metal Wallet"
              />
            </CardHeader>
            <CardFooter> 
            <div className="flex flex-col">
            <h3 className="text-lg tracking-tight font-bold">Sleek Design</h3>
              <p className="text-muted-foreground text-sm font-semibold text-base">
              Embrace minimalism with a sleek, thin profile that fits seamlessly into any pocket or purse without the bulk.
              </p>
            </div>
            </CardFooter>
        </Card>

        <Card > 
            <CardHeader> 
            <Image 
                className="rounded-sm"
                src="/23.webp"
                layout="responsive"
                width={300}
                height={300}
                alt="thematteblackcompany Full Metal Wallet"
              />
            </CardHeader>
            <CardContent>
              
            </CardContent>
            <CardFooter> 
            <div className="flex flex-col">
            <h3 className="text-lg tracking-tight font-bold">Built to Last</h3>
              <p className="text-muted-foreground text-sm font-semibold text-base">
              Crafted for resilience, the thematteblackcompany wallet combines high-quality materials and superior craftsmanship to ensure durability and elegance that withstand the test of time.


              </p>
            </div>
            </CardFooter>
        </Card>
         
        </div>
      </div>
    </div>
  </div>
);