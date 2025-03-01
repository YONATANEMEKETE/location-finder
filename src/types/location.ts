export interface LocationSuggestion {
  text: string;
  magicKey: string;
  isCollection: boolean;
}

export interface ApiResponse {
  suggestions: LocationSuggestion[];
}

export interface formType {
  name: string;
  countryCode: string;
}
