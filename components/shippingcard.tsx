import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons';

export default function ShippingForm() {
  const [product, setProduct] = useState({
    name: "K7N2 All metal wallet",
    price: 59.99,
    description: "A brief yet informative description of the product, highlighting its main features and benefits.",
    imageUrl: "/path/to/product-image.jpg",
  });

  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity((prevQuantity) => (prevQuantity < 5 ? prevQuantity + 1 : prevQuantity));
  };

  const decreaseQty = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <>
      <Card className='w-full max-w-4xl mx-auto'>
        <CardHeader>
          <CardTitle className="text-lg font-black">
            K7N2 | MATTE BLACK ALL METAL WALLET
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className='font-bold text-sm'>Quantity</h2>
          <div className="flex items-center gap-2">
            <Button  variant={"outline"} onClick={decreaseQty}><MinusCircledIcon/></Button>
            <span className='font-bold text-sm'>{quantity}</span>
            <Button  variant={"outline"} onClick={increaseQty}><PlusCircledIcon/></Button>
            <span className='font-bold'> $ {totalPrice}</span>
          </div>
          <form className="space-y-4 mt-4">
            <h2 className='font-bold text-sm'> Contact Information</h2>
            <div className="flex flex-wrap gap-4">
              <Input className='font-semibold w-full sm:w-auto flex-1' id="email" type="email" placeholder="Email Address"/>
              <Input className='font-semibold w-full sm:w-auto flex-1' id="phone" type="tel" placeholder="Phone Number"/>
            </div>

            <h2 className='font-bold text-sm'> Shipping Information</h2>
            <div className="flex flex-wrap gap-4">
              <Input className='font-semibold w-full md:w-1/3' id="firstName" placeholder="First Name"/>
              <Input className='font-semibold w-full md:w-1/3' id="lastName" placeholder="Last Name"/>
              <Input className='font-semibold w-full md:w-1/3' id="middleName" placeholder="Middle Name (Optional)"/>
              <Input className='font-semibold w-full' id="address" placeholder="Address"/>
              <Input className='font-semibold w-full md:w-1/3' id="city" placeholder="City"/>
              <Input className='font-semibold w-full md:w-1/3' id="state/province" placeholder="State/Province"/>
              <Input className='font-semibold w-full md:w-1/3' id="zipCode" placeholder="Zip Code"/>
            </div>

            <Select>
              <SelectTrigger className="w-full font-semibold">
                <SelectValue placeholder="Choose your country" />
              </SelectTrigger>
              <SelectContent>
                  <SelectGroup>
                      <SelectLabel>Countries</SelectLabel>
                      {/* List of countries */}
                  </SelectGroup>
              </SelectContent>
            </Select>

            <Button className='w-full mt-4 font-bold' type="submit">Proceed to Payment</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
