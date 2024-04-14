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
      <Card className='w-[650px]'>
        <CardHeader>
          <CardTitle className="text-lg font-black">
            K7N2 | MATTE BLACK ALL METAL WALLET
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className='font-bold text-sm'>Quantity</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Button  variant={"outline"} onClick={decreaseQty}><MinusCircledIcon/></Button>
            <span className='font-bold text-sm'>{quantity}</span>
            <Button  variant={"outline"} onClick={increaseQty}><PlusCircledIcon/></Button>
            <span className='font-bold'> $ {totalPrice}</span>
          </div>
          <form className="space-y-4 mt-4">
            <h2 className='font-bold text-sm'> Contact Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Input className='font-semibold' id="email" type="email" placeholder="Email Address"/>
              </div>
              <div>
                <Input className='font-semibold' id="phone" type="tel" placeholder="Phone Number"/>
              </div>
            </div>

            <h2 className='font-bold text-sm'> Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Input className='font-semibold' id="firstName" placeholder="First Name"/>
                <Input className='font-semibold' id="lastName" placeholder="Last Name"/>
              </div>
              <div>
                <Input className='font-semibold' id="middleName" placeholder="Middle Name (Optional)"/>
              </div>
            </div>
            
            <Input className='font-semibold' id="address" placeholder="Address"/>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
              <Input className='font-semibold' id="city" placeholder="City"/>
                <Input className='font-semibold' id="state/province" placeholder="State/Province"/>
                <Input className='font-semibold' id="zipCode" placeholder="Zip Code"/>
              </div>
              <div>
              <Select>
    <SelectTrigger className="font-semibold">
        <SelectValue placeholder="Choose your country" />
    </SelectTrigger>
    <SelectContent>
        <SelectGroup>
            <SelectLabel>Countries</SelectLabel>
            <SelectItem className="font-medium" value="Australia">Australia</SelectItem>
            <SelectItem className="font-medium" value="Austria">Austria</SelectItem>
            <SelectItem className="font-medium" value="Belgium">Belgium</SelectItem>
            <SelectItem className="font-medium" value="Canada">Canada</SelectItem>
            <SelectItem className="font-medium" value="Denmark">Denmark</SelectItem>
            <SelectItem className="font-medium" value="France">France</SelectItem>
            <SelectItem className="font-medium" value="Germany">Germany</SelectItem>
            <SelectItem className="font-medium" value="Greece">Greece</SelectItem>
            <SelectItem className="font-medium" value="Hong Kong">Hong Kong</SelectItem>
            <SelectItem className="font-medium" value="Ireland">Ireland</SelectItem>
            <SelectItem className="font-medium" value="Italy">Italy</SelectItem>
            <SelectItem className="font-medium" value="Japan">Japan</SelectItem>
            <SelectItem className="font-medium" value="Luxembourg">Luxembourg</SelectItem>
            <SelectItem className="font-medium" value="Mexico">Mexico</SelectItem>
            <SelectItem className="font-medium" value="the Netherlands">The Netherlands</SelectItem>
            <SelectItem className="font-medium" value="New Zealand">New Zealand</SelectItem>
            <SelectItem className="font-medium" value="Norway">Norway</SelectItem>
            <SelectItem className="font-medium" value="Poland">Poland</SelectItem>
            <SelectItem className="font-medium" value="Singapore">Singapore</SelectItem>
            <SelectItem className="font-medium" value="Slovenia">Slovenia</SelectItem>
            <SelectItem className="font-medium" value="Spain">Spain</SelectItem>
            <SelectItem className="font-medium" value="Sweden">Sweden</SelectItem>
            <SelectItem className="font-medium" value="Switzerland">Switzerland</SelectItem>
            <SelectItem className="font-medium" value="the United Kingdom">The United Kingdom</SelectItem>
            <SelectItem className="font-medium" value="the United States">The United States</SelectItem>
        </SelectGroup>
    </SelectContent>
</Select>

              </div>
            </div>

            <Button className='font-bold' type="submit">Proceed to Payment</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
