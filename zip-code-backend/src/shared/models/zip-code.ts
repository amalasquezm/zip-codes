import { Place } from "./place";

export interface ZipCode {
  "post code": string,
   country: string,
   "country abbreviation": string,
   places: Place[]
}