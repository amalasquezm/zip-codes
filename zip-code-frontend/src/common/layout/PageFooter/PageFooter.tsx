import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export type PageFooterProps = {
  children?: ReactNode;
};

const marginTop = {
  base: 2,
  md: 4,
};

const marginNonTop = {
  base: -2,
  md: -4,
};

const PageFooter = (props: PageFooterProps) => {
  return (
    <Box
      sx={{ position: "sticky", bottom: "0" }}
      bg="white"
      zIndex={2}
      mt={marginTop}
      mb={marginNonTop}
      ml={marginNonTop}
      mr={marginNonTop}
    >
      <Flex bg="blackAlpha.100" justifyContent="center">
        {props.children}
      </Flex>
    </Box>
  );
};

export default PageFooter;
