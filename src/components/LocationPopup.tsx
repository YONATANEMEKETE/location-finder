import { LocationSuggestion } from '@/types/location';
import React from 'react';
import LoadingLocations from './LoadingLocations';
import LocationCard from './LocationCard';

interface ListProps {
  locations: LocationSuggestion[];
  isLoading: boolean;
  onLocationSelect: (location: LocationSuggestion) => void;
}

const LocationPopup = ({
  locations,
  isLoading,
  onLocationSelect,
}: ListProps) => {
  return (
    <div className="p-4 bg-white absolute top-full left-0 right-0 shadow-md rounded-md z-[1000] min-w-[300px]">
      {isLoading ? (
        <LoadingLocations />
      ) : locations.length > 0 ? (
        <div className="grid gap-2">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              onSelect={() => onLocationSelect(location)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-500 dark:text-slate-400">
          <p>No locations found. Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default LocationPopup;
