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
import { ChangeProps, formType, LocationSuggestion } from '@/types/location';
import LocationPopup from './LocationPopup';

interface FormProps {
  formData: formType;
  handleChange: (props: ChangeProps) => void;
  activeField: string;
  locations: LocationSuggestion[];
  isLoading: boolean;
  onLocationSelect: (location: LocationSuggestion) => void;
}

const LocationForm = ({
  formData,
  handleChange,
  isLoading,
  activeField,
  locations,
  onLocationSelect,
}: FormProps) => {
  return (
    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
      <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
        Search Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 relative">
          <Label htmlFor="name">Street</Label>
          <Input
            id="Street"
            placeholder="Enter the Street"
            value={formData.street}
            onChange={(e) =>
              handleChange({
                data: { street: e.target.value },
                inputId: 'street',
              })
            }
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
          {activeField === 'street' && (
            <LocationPopup
              locations={locations}
              isLoading={isLoading}
              onLocationSelect={onLocationSelect}
            />
          )}
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="name">Zip</Label>
          <Input
            id="Zip"
            placeholder="Enter the Zip Code"
            value={formData.zip}
            onChange={(e) =>
              handleChange({
                data: { zip: e.target.value },
                inputId: 'zip',
              })
            }
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
          {activeField === 'zip' && (
            <LocationPopup
              locations={locations}
              isLoading={isLoading}
              onLocationSelect={onLocationSelect}
            />
          )}
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="name">City</Label>
          <Input
            id="City"
            placeholder="Enter the City"
            value={formData.city}
            onChange={(e) =>
              handleChange({
                data: { city: e.target.value },
                inputId: 'city',
              })
            }
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
          {activeField === 'city' && (
            <LocationPopup
              locations={locations}
              isLoading={isLoading}
              onLocationSelect={onLocationSelect}
            />
          )}
        </div>

        <div className="space-y-2 relative">
          <Label htmlFor="name">State</Label>
          <Input
            id="State"
            placeholder="Enter the State"
            value={formData.state}
            onChange={(e) =>
              handleChange({
                data: { state: e.target.value },
                inputId: 'state',
              })
            }
            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
          {activeField === 'state' && (
            <LocationPopup
              locations={locations}
              isLoading={isLoading}
              onLocationSelect={onLocationSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
