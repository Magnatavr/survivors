export type CountryType = {
  id: number;
  name: string;
};

export type LocationType = {
  id: number;
  name: string;
};

export type DangerType = {
  id: number;
  name: string;
  text: string;
};

export type DangerFormType = {
  name: string;
  text: string;
};
export type LocationFormType = {
  name: string;
};
export type CountryFormType = {
  name: string;
};

export type CountryLocTypeForm = string;

export type CountryLocDangTypeForm = {
  locationId: number;
  currCountry: number | null;
};
