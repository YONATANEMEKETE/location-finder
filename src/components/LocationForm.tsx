import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface FormProps {
  formData: {
    name: string;
    countryCode: string;
  };
  handleChange: (data: Partial<FormProps['formData']>) => void;
}

const countryCodes = [
  { value: 'FRA', label: 'France' },
  { value: 'GBR', label: 'United Kingdom' },
  { value: 'US', label: 'United States' },
  { value: 'CHN', label: 'China' },
  { value: 'ETH', label: 'Ethiopia' },
];

const LocationForm = ({ formData, handleChange }: FormProps) => {
  return (
    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
      <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
        Search Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter the name"
            value={formData.name}
            onChange={(e) => handleChange({ name: e.target.value })}
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
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
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
