import { Flex, Image, Tooltip } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import type { Network } from "types/tmdb/Types";

interface IProps {
  networks: Network[];
}

const NetworkDetails = ({ networks }: IProps) => {
  return (
    <Flex direction="column" gap={4}>
      <SectionTitle
        sectionTitle={networks.length > 1 ? "Networks" : "Network"}
        fontSize="xs"
      />

      <Flex direction={{ base: "row", lg: "column" }} gap={3} w="fit-content">
        {networks.map((network) => (
          <Tooltip
            key={network.id}
            label={network.name}
            aria-label={network.name}
            hasArrow
            bg="darkPurple.700"
            placement="top"
            closeOnScroll
          >
            <Image
              key={network.id}
              src={`https://image.tmdb.org/t/p/w92${network.logo_path}`}
              alt={network.name}
            />
          </Tooltip>
        ))}
      </Flex>
    </Flex>
  );
};

export default NetworkDetails;
