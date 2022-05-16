import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";

export type PageHeaderProps = {
  title: string;
  children?: ReactNode;
};

const PageHeader = (props: PageHeaderProps) => {
  return (
    <Flex pb={{ base: 2, md: 4 }} alignItems="center">
      <Heading as="h4" size="md">
        {props.title}
      </Heading>
      <Spacer />
      {props.children}
    </Flex>
  );
};

export default PageHeader;
