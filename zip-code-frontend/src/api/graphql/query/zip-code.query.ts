import { gql } from '@apollo/client';

export const GET_ZIP_CODES = gql`
query GetZipCodeDetails($countryCode: String, $zipCode:  String) {
  zipCodeDetails(countryCode: $countryCode, zipCode: $zipCode) {
    postCode
    country
    countryAbbreviation
    places {
      name
      longitude
      state
      stateAbbreviation
      latitude
    }
  }
}
`;