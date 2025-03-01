import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from './ui/select';
import { formType } from '@/types/location';

interface FormProps {
  formData: formType;
  handleChange: (data: Partial<FormProps['formData']>) => void;
}

// const countryCodes = [
//   { value: 'FRA', label: 'France' },
//   { value: 'GBR', label: 'United Kingdom' },
//   { value: 'US', label: 'United States' },
//   { value: 'CHN', label: 'China' },
//   { value: 'ETH', label: 'Ethiopia' },
// ];

const LocationForm = ({ formData, handleChange }: FormProps) => {
  return (
    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
      <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
        Search Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Street</Label>
          <Input
            id="Street"
            placeholder="Enter the Street"
            value={formData.street}
            onChange={(e) => handleChange({ street: e.target.value })}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Zip</Label>
          <Input
            id="Zip"
            placeholder="Enter the Zip Code"
            value={formData.zip}
            onChange={(e) => handleChange({ zip: e.target.value })}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">City</Label>
          <Input
            id="City"
            placeholder="Enter the City"
            value={formData.city}
            onChange={(e) => handleChange({ city: e.target.value })}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">State</Label>
          <Input
            id="State"
            placeholder="Enter the State"
            value={formData.state}
            onChange={(e) => handleChange({ state: e.target.value })}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* <div className="space-y-2">
          <Label htmlFor="country-code">Country Code</Label>
          <Select
            value={formData.countryCode}
            onValueChange={(value) => handleChange({ countryCode: value })}
          >
            <SelectTrigger
              id="country-code"
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            >
              <SelectValue placeholder="Select a Country" />
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((state) => (
                <SelectItem key={state.value} value={state.value}>
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> */}
      </div>
    </div>
  );
};

export default LocationForm;
