import { useLazyQuery } from "@apollo/client";
import { Box, Button, Text, FormControl, FormLabel, HStack, Input, VStack, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GET_ZIP_CODES } from "../../api/graphql/query/zip-code.query";
import PageBody from "../../common/layout/PageBody/PageBody";
import PageHeader from "../../common/layout/PageHeader/PageHeader";
import PageViewport from "../../common/layout/PageViewport/PageViewport";
import { ZipCodeSumaryInfo } from "../../common/zip-code/ZipCodeSumaryInfo/ZipCodeSumaryInfo";
import { ZipCodeDetails } from "../../models/zip-code-details";

const ZipCode = () => {
  const [countryCode, setCountryCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [searchHistory, setSearchHistory] = useState<ZipCodeDetails[]>([]);


  const [getZipCodes, { data }] = useLazyQuery(GET_ZIP_CODES)
  
  useEffect(() => {
    if (data) {
      setSearchHistory([...searchHistory.slice(-4), data.zipCodeDetails]);
    }
    console.log('data', data);
  }, [data]);

  const handleCountryCode = (event: any) => setCountryCode(event.target.value);
  const handleZipCode = (event: any) => setZipCode(event.target.value);
  const handleQueryExecution = () => getZipCodes({ variables: { countryCode, zipCode }});
  const handleCleanSearch = () => setSearchHistory([]);
  const zipCodeHistory = searchHistory.map((zipCodeDetails: ZipCodeDetails, idx: number) =>
    <ZipCodeSumaryInfo key={idx} zipCode={zipCodeDetails}></ZipCodeSumaryInfo>
  );


  return (
    <PageViewport>
      <PageHeader title="Zip Details" />
      <PageBody>
        <HStack alignItems="flex-start">
          <VStack width="500px" alignItems="left" borderRight="1px solid">
            <Text fontWeight="bold">Search Results</Text>
            <Box pb="50px">
              <FormControl pb="20px">
                <FormLabel htmlFor='countryCode'>Country code</FormLabel>
                <Input value={countryCode}
                    onChange={handleCountryCode}
                    id="countryCode"
                  />
              </FormControl>

              <FormControl pb="20px">
                <FormLabel htmlFor='zipCode'>Zip code</FormLabel>
                <Input value={zipCode}
                    onChange={handleZipCode}
                    id='zipCode' />
              </FormControl>

              <Button colorScheme='teal' size='sm' onClick={handleQueryExecution} >
                Get Details
              </Button>
            </Box>
            
            {data?.zipCodeDetails &&
              <ZipCodeSumaryInfo zipCode={data.zipCodeDetails}></ZipCodeSumaryInfo>
            }
          </VStack>
          <VStack alignContent="initial" pl="200px" alignItems="left">
              <Flex alignItems="center">
                <Text fontWeight="bold">Search History</Text>
                <Box pl="20px">
                  <Button colorScheme='teal' size='sm' onClick={handleCleanSearch}>Clean Search</Button>
                </Box>
              </Flex>
            { zipCodeHistory }
          </VStack>
        </HStack>
      </PageBody>
    </PageViewport>
  );
};

export default ZipCode;
