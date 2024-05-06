import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OrderNow = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge className="font-bold">Starting $ 39.99</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-3xl tracking-tighter max-w-xl text-center font-bold">
            Join the club !
          </h2>
        </div>
        <div className="flex justify-center items-center w-full">
          <Card className="rounded-md w-full max-w-[500px] mx-auto">
            {/* Ensure the card is centered and doesn't exceed 500px width */}
            <CardHeader>
              <Image 
                className="rounded-sm"
                src="/boximage.webp"
                layout="responsive"
                width={300}
                height={300}
                alt="thematteblackcompany Full Metal Wallet"
              />
            </CardHeader>
            <CardFooter className="flex justify-center"> {/* Center the content */}
              <Link href="https://buy.stripe.com/9AQ15Z83aaYFctG5kk">
                <Button size={"lg"} className="font-bold w-full">
                  Order Now | $39.99
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
