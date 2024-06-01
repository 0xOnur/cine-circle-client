import { Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface IProps {
  isSpoiler: boolean;
  setIsSpoiler: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowSpoilerButton = ({ isSpoiler, setIsSpoiler }: IProps) => {
  return (
    <Flex h="fit-content">
      <Tooltip label={isSpoiler ? "Show Spoiler" : "Hide Spoiler"}>
        <Text
          cursor="pointer"
          fontWeight="bold"
          fontStyle="italic"
          onClick={() => setIsSpoiler(!isSpoiler)}
        >
          {isSpoiler ? <FaRegEyeSlash size="30" /> : <FaRegEye size="30" />}
        </Text>
      </Tooltip>
    </Flex>
  );
};

export default ShowSpoilerButton;
