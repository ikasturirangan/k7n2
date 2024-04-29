import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select } from './ui/select'; // Assuming you have a Select component

// Extend the form values shape
interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string; // New field
  country: string; // New field
  phoneNumber: string;
}

// Extended validation schema
const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  address: yup.string().required('Address is required'),
  apartment: yup.string(),
  city: yup.string().required('City is required'),
  state: yup.string().required('State/Province is required'),
  zipCode: yup.string().required('ZIP code is required'), // New validation
  country: yup.string().required('Country is required'), // New validation
  phoneNumber: yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Phone number is required'),
});

const CheckoutForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '', // Initialize new field
      country: '', // Initialize new field
      phoneNumber: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitStatus('submitting');
      console.log(values);
      // Simulate API call
      try {
        // await api.submitForm(values);
        setSubmitStatus('submitted');
      } catch (error) {
        setSubmitStatus('error');
      }
      setSubmitting(false);
    },
  });

  return (
    
      <><CardHeader>
      <CardTitle className='font-bold'>the matte black company | Metal RFID Blocking Wallet</CardTitle>
      <CardDescription className='font-semibold'>A brief yet informative description of the product, highlighting its main features and benefits.</CardDescription>
    </CardHeader><CardContent>
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email, First Name, Last Name, Address, City, State, ZIP Code, Country, Phone Number */}
          {/* Similar structure as shown previously, just add more fields as needed */}

          {/* Example for new field: ZIP Code */}
          <div className="mb-4">
            <Label className='font-bold'>Email Address</Label>
            <Input placeholder='Email Address' />
          </div>

          <div className="mb-4">
            <Label className='font-bold'>Phone Number</Label>
            <Input className='font-semibold' placeholder="Phone Number " />
          </div>
          <div className="mb-4">
            <Label className='font-bold'>First Name</Label>
            <Input />
          </div>

          <div className="mb-4">
            <Label className='font-bold'>Last Name</Label>
            <Input />
          </div>
          <div className="mb-4">
            <Label className='font-bold'>Apartment, Suite, Etc. </Label>
            <Input />
          </div>

          <div className="mb-4">
            <Label className='font-bold'>Address</Label>
            <Input />
          </div>
          <div className="mb-4">
            <Label className='font-bold'>City</Label>
            <Input />
          </div>

          <div className="mb-4">
            <Label className='font-bold'>State</Label>
            <Input />
          </div>
          <div className="mb-4">
            <Label className='font-bold'>Zip code</Label>
            <Input />
          </div>
          {/* Submission Status Message */}
          {submitStatus === 'submitting' && <div>Submitting your information...</div>}
          {submitStatus === 'submitted' && <div>Thank you! Your information has been submitted.</div>}
          {submitStatus === 'error' && <div>An error occurred. Please try again.</div>}

          {/* Submission Button */}
          <div className="flex flex-col md:flex-row items-center md:justify-between md:col-span-2">
            <Button type="submit" disabled={formik.isSubmitting} className="font-semibold mt-4">
              Continue to Shipping
            </Button>
          </div>
        </form>
      </CardContent></>
    
  );
};

export default CheckoutForm;
