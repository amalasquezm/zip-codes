import { useQuery } from "@apollo/client";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GET_ZIP_CODES } from "../../api/graphql/query/zip-code.query";
import PageBody from "../../common/layout/PageBody/PageBody";
import PageHeader from "../../common/layout/PageHeader/PageHeader";
import PageViewport from "../../common/layout/PageViewport/PageViewport";
import { ZipCodeSumaryInfo } from "../../common/zip-code/ZipCodeSumaryInfo/ZipCodeSumaryInfo";

const ZipCode = () => {
  const [countryCode, setCountryCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const { error, loading, data, refetch } = useQuery(GET_ZIP_CODES, {
    variables: { countryCode, zipCode }
  });

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  const handleCountryCode = (event: any) => setCountryCode(event.target.value);
  const handleZipCode = (event: any) => setZipCode(event.target.value);
  const handleQueryExecution = () => refetch();

  return (
    <PageViewport>
      <PageHeader title="Zip Details" />
      <PageBody>

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
      </PageBody>
    </PageViewport>
  );
};

export default ZipCode;
