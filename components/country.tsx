import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons';

export default function ShippingForm() {
  

  return (
    <>
      
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
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

    </>
  );
}
