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
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge className="font-bold">Starting $ 59.99</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Join the club!
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <Card className="rounded-md w-full max-w-[500px] mx-auto"> {/* Ensure the card is centered and doesn't exceed 500px width */}
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
              <Link href="https://buy.stripe.com/test_7sI5nve8QePhewEbII">
                <Button className="font-bold w-full">
                  Order Now | $59.99
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

