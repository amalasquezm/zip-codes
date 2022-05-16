import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export type PageBodyProps = {
  children: ReactNode;
};

const PageBody = (props: PageBodyProps) => {
  return <Box flex={1}>{props.children}</Box>;
};

export default PageBody;
