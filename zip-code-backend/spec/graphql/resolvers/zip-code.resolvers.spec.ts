import 'jest';
import { ZipCode } from '../../../src/shared/models/zip-code';
import { ZipCodeDetailsQueryable } from '../../../src/shared/dto/queryable/zip-code-details.queryable';
import { convertToZipCodeDetailsQueryable } from '../../../src/graphql/resolvers/zip-code.resolvers';

describe('zip-code.resolver', () => {
  describe('convertToZipCodeDetailsQueryable', () => {
    it('should convert ZipCode object to ZipCodeDetailsQueryable', async () => {
      const zipCode: ZipCode = {
        'post code': '90210',
        country: 'United States',
        'country abbreviation': 'US',
        places: [{
          'place name': 'Beverly Hills',
          longitude: '-118.4065',
          state: 'California',
          'state abbreviation': 'CA',
          latitude: '34.0901'
        }]
      };
      
      const expected: ZipCodeDetailsQueryable = {
        postCode: '90210',
        country: 'United States',
        countryAbbreviation: 'US',
        places: [{
          name: 'Beverly Hills',
          longitude: '-118.4065',
          state: 'California',
          stateAbbreviation: 'CA',
          latitude: '34.0901'
        }]
      }
      
      const actual = convertToZipCodeDetailsQueryable(zipCode)

      expect(actual).toStrictEqual(expected);
    });
  });
});