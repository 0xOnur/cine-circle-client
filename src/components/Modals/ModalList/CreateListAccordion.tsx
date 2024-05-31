import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import CreateList from "@components/Shared/MediaDetailsPage/Overview/Buttons/CreateList";

interface IProps {
  mediaType: "tv" | "movie";
}

const CreateListAccordion = ({ mediaType }: IProps) => {
  return (
    <Box>
      <Accordion allowToggle my={5}>
        <AccordionItem border="none">
          <AccordionButton
            bg="darkPurple.500"
            color="white"
            rounded="md"
            _hover={{ bg: "darkPurple.600" }}
          >
            <Box as="span" flex="1" textAlign="left">
              <Text fontWeight="600">
                Create New {mediaType === "tv" ? "TV Show" : "Movie"} List
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel py={8}>
            <CreateList defaultMediaType={mediaType} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default CreateListAccordion;
