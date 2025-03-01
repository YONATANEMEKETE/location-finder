import { LocationSuggestion } from '@/types/location';
import React from 'react';
import LocationCard from './LocationCard';
import LoadingLocations from './LoadingLocations';

interface ListProps {
  locations: LocationSuggestion[];
  isLoading: boolean;
  onLocationSelect: (location: LocationSuggestion) => void;
}

const LocationsList = ({
  locations,
  isLoading,
  onLocationSelect,
}: ListProps) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
        Locations
      </h2>

      {isLoading ? (
        <LoadingLocations />
      ) : locations.length > 0 ? (
        <div className="grid gap-4">
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

export default LocationsList;
