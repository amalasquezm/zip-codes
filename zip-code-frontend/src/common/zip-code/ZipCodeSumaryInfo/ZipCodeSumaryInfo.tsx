import { HStack, Text } from "@chakra-ui/react";
import { ZipCodeDetails } from "../../../models/zip-code-details";


export interface ZipCodeDetailsProps {
  zipCode: ZipCodeDetails;
}

export const ZipCodeSumaryInfo = (props: ZipCodeDetailsProps) => {
  return (
    <div>
      <HStack>
        <HStack w='200px' h='80px'>
          <Text pr="10px" fontWeight="bold">City:</Text>
          <Text>{props.zipCode.places[0].name}</Text>
        </HStack>
        <HStack w='200px' h='80px'>
          <Text pr="10px" fontWeight="bold">State:</Text>
          <Text>{props.zipCode.places[0].state}</Text>
        </HStack>
      </HStack>
    </div>
  );
};
