export interface LocationSuggestion {
  text: string;
  magicKey: string;
  isCollection: boolean;
}

export interface ApiResponse {
  suggestions: LocationSuggestion[];
}

export interface formType {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface ChangeProps {
  data: Partial<formType>;
  inputId: string;
}
