import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { getZipCodeDetails } from '../resolvers/zip-code.resolvers';

const Place = new GraphQLObjectType({
  name: 'Place',
  fields: {
    name: { type: GraphQLString },
    longitude: { type: GraphQLString },
    state: { type: GraphQLString },
    stateAbbreviation: { type: GraphQLString },
    latitude: { type: GraphQLString }
  }
});

const ZipCodeDetails = new GraphQLObjectType({
  name: 'ZipCodeDetails',
  
  fields: {
    postCode: { type: GraphQLString },
    country: { type: GraphQLString },
    countryAbbreviation: { type: GraphQLString },
    places: { type: new GraphQLList(Place) }
  }
});

const ZipCodesQuery = new GraphQLObjectType({
  name: 'ZipCodesQuery',
  fields: {
    zipCodeDetails: { 
      type: ZipCodeDetails,
      args: {
        countryCode: { type: GraphQLString },
        zipCode: { type: GraphQLString }
      },
      resolve(parent, args) {
        return getZipCodeDetails(args.countryCode, args.zipCode);
      }
    }
  }
});

export const baseSchema = new GraphQLSchema({
  query: ZipCodesQuery
});