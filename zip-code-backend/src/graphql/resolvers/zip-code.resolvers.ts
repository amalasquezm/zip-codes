import axios from 'axios';
import { ZipCodeDetailsQueryable } from '../../shared/dto/queryable/zip-code-details.queryable';
import { ZipCode } from '../../shared/models/zip-code';
import { PlaceQueryable } from '../../shared/dto/queryable/place.queryable';

export const getZipCodeDetails = async (countryCode: string, zipCode: string): Promise<ZipCodeDetailsQueryable> => {
  try {
    const zipCodeDetails = await axios.get<ZipCode>(`http://api.zippopotam.us/${countryCode}/${zipCode}`);
    
    return zipCodeDetails?.data ? convertToZipCodeDetailsQueryable(zipCodeDetails.data) : undefined;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const convertToZipCodeDetailsQueryable = (zipCode: ZipCode): ZipCodeDetailsQueryable => {
  const places: PlaceQueryable[] = zipCode.places.map(place => ({
    name: place['place name'],
    longitude: place.longitude,
    state: place.state,
    stateAbbreviation: place['state abbreviation'],
    latitude: place.latitude
  }));

  return {
    postCode: zipCode['post code'],
    country: zipCode.country,
    countryAbbreviation: zipCode['country abbreviation'],
    places: places
  }; 
};
  