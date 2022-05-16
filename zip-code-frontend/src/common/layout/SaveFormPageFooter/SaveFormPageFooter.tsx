import PageFooter from "../PageFooter/PageFooter";
import { Button } from "@chakra-ui/react";
import { MouseEvent } from "react";

export type SaveFormFooterProps = {
  isLoading: boolean;
  onSave: (evt: MouseEvent<HTMLButtonElement>) => void;
  onCancel: (evt: MouseEvent<HTMLButtonElement>) => void;
};

const SaveFormPageFooter = (props: SaveFormFooterProps) => {
  return (
    <PageFooter>
      <Button
        m={4}
        colorScheme="purple"
        isLoading={props.isLoading}
        variant="outline"
        onClick={props.onCancel}
      >
        Cancel
      </Button>
      <Button
        m={4}
        colorScheme="purple"
        isLoading={props.isLoading}
        onClick={props.onSave}
      >
        Save Changes
      </Button>
    </PageFooter>
  );
};

export default SaveFormPageFooter;
