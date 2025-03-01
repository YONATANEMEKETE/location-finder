'use client';

import React, { useCallback, useEffect, useState } from 'react';
import LocationForm from './LocationForm';
import LocationsList from './LocationsList';
import { ApiResponse, formType, LocationSuggestion } from '@/types/location';

const LocationFinder = () => {
  const [locations, setLocations] = useState<LocationSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<formType>({
    name: '',
    countryCode: 'US',
  });

  useEffect(() => {
    const fetchLocations = async () => {
      // Only fetch if at least one field has data
      if (!formData.name) {
        setLocations([]);
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetch(
          `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${encodeURIComponent(
            formData.name
          )}&countryCode=${formData.countryCode}&maxSuggestion=5`
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
    setFormData((prev) => ({ ...prev, name: location.text }));
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
