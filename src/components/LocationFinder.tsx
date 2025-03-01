'use client';

import React, { useCallback, useEffect, useState } from 'react';
import LocationForm from './LocationForm';
import LocationsList from './LocationsList';
import { ApiResponse, formType, LocationSuggestion } from '@/types/location';

const LocationFinder = () => {
  const [locations, setLocations] = useState<LocationSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<formType>({
    state: '',
    street: '',
    zip: '',
    city: '',
  });

  useEffect(() => {
    const fetchLocations = async () => {
      // Only fetch if at least one field has data
      if (
        !formData.state &&
        !formData.city &&
        !formData.zip &&
        !formData.street
      ) {
        setLocations([]);
        return;
      }
      // construct a query string
      const query = `${formData.street} ${formData.city} ${formData.state} ${formData.zip}`;

      try {
        setIsLoading(true);
        const response = await fetch(
          `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${encodeURIComponent(
            query
          )}&countryCode=US&maxSuggestion=5`
        );
        const data: ApiResponse = await response.json();
        const suggestions = data.suggestions;
        setLocations(suggestions);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    // Debounce the fetch to avoid too many updates
    const handler = setTimeout(() => {
      fetchLocations();
    }, 300);

    return () => clearTimeout(handler);
  }, [formData]);

  const handleChange = useCallback((data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const handleLocationSelect = useCallback((location: LocationSuggestion) => {
    const regex = /^(.*?),\s*([^,]+),\s*([A-Z]{2}),\s*(\d{5}),\s*(.*)$/;
    const match = location.text.match(regex);

    const parts = location.text.split(',').map((part) => part.trim());
    if (match) {
      // Extract individual parts
      const street = parts[0]; // "1210 Brentwood Ave"
      const city = parts[1]; // "Bethlehem"
      const state = parts[2]; // "PA"
      const zipCode = parts[3]; // "18017"

      const newFormData: formType = {
        street: street,
        city: city,
        state: state,
        zip: zipCode,
      };

      setFormData(newFormData);
    } else {
      const street = parts[0] || ''; // "1210 Brentwood Ave"
      const city = parts[1] || ''; // "Bethlehem"
      const state = parts[2] || ''; // "PA"
      const zipCode = parts[3] || ''; // "18017"

      const newFormData: formType = {
        street: street,
        city: city,
        state: state,
        zip: zipCode,
      };

      setFormData(newFormData);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <LocationForm formData={formData} handleChange={handleChange} />
        <LocationsList
          isLoading={isLoading}
          locations={locations}
          onLocationSelect={handleLocationSelect}
        />
      </div>
    </div>
  );
};

export default LocationFinder;
