import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMapLocation } from "react-icons/fa6";

interface IProps {
  user: IUser;
  isEditable: boolean;
}

const UserInfo = ({ user, isEditable }: IProps) => {
  user.about = "I am a software engineer";
  return (
    <Flex
      w="full"
      minW="fit-content"
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "flex-start" }}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius={"24"}
      overflow={"hidden"}
    >
      <Flex direction="column" p={4} gap={4} w="fit-content">
        <Image
          src={user.avatar}
          alt="avatar"
          maxW={"300px"}
          rounded={24}
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/300x450.png?text=No+Poster"
        />
        {isEditable && (
          <Button
            colorScheme="darkPurple"
            color="white"
            size="lg"
            rounded={24}
            bg={"darkPurple.600"}
            _hover={{ bg: "darkPurple.700" }}
          >
            <Text>Edit Profile</Text>
          </Button>
        )}
      </Flex>
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
          <Text fontSize="md" fontWeight="500" color="gray.500">
            {user.about}
          </Text>
        )}

        <Text fontSize="md" fontWeight="500" color="gray.500">
          Joined: {new Date(user.createdAt).toLocaleDateString()}
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserInfo;
