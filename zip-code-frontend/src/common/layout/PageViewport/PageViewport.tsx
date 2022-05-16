import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export type PageViewportProps = {
  children: ReactNode;
};

const PageViewport = (props: PageViewportProps) => {
  return (
    <Flex direction="column" flex={1} p={{ base: 2, md: 4 }} padding="20px">
      {props.children}
    </Flex>
  );
};

export default PageViewport;
