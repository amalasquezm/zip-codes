import { Place } from "./place";

export interface ZipCodeDetails {
  postCode: string,
  country: string,
  countryAbbreviation: string,
  places: Place[]
}