import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { FaMapLocation } from "react-icons/fa6";

interface IProps {
  user: IUser;
}

const UserDetails = ({ user }: IProps) => {
  return (
    <Flex direction="column" w="full" gap={4} p={10}>
      <Heading
        size="lg"
        fontWeight="bold"
        color={useColorModeValue("darkPurple.700", "gray.200")}
      >
        {user.username}
      </Heading>
      <Text
        fontSize="md"
        fontWeight="500"
        textTransform={"capitalize"}
        color="gray.500"
      >
        {user.name} {user.surname}
      </Text>
      {user.location && (
        <Flex
          gap={2}
          align="center"
          fontSize="md"
          fontWeight="500"
          color="gray.500"
        >
          <FaMapLocation />
          {user.location}
        </Flex>
      )}
      {user.about && (
        <Text
          fontSize="md"
          fontWeight="500"
          color="gray.500"
          whiteSpace="pre-wrap"
        >
          {user.about}
        </Text>
      )}
      <Text fontSize="md" fontWeight="500" color="gray.500">
        Joined: {new Date(user.createdAt).toLocaleDateString()}
      </Text>
    </Flex>
  );
};

export default UserDetails;
