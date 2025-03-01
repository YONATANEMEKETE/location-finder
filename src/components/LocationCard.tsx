import { LocationSuggestion } from '@/types/location';
import { MapPin } from 'lucide-react';
import React from 'react';

interface LocationCardProps {
  location: LocationSuggestion;
  onSelect: () => void;
}

const LocationCard = ({ location, onSelect }: LocationCardProps) => {
  return (
    <div
      className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200 group cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex items-center gap-3">
        <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
          <MapPin size={18} />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-slate-800 dark:text-slate-100">
            {location.text}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
