import { PlaceQueryable } from "./place.queryable";

export interface ZipCodeDetailsQueryable {
  postCode: string,
  country: string,
  countryAbbreviation: string,
  places: PlaceQueryable[]
}