import { Flex, useColorModeValue } from "@chakra-ui/react";
import UserAvatar from "./UserAvatar";
import UserDetails from "./UserDetails";
import EditProfileButton from "./EditProfileButton";

interface IProps {
  user: IUser;
  isEditable?: boolean;
}

const UserInfo = ({ user, isEditable }: IProps) => {
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
        <UserAvatar avatar={user.avatar!} />
        {isEditable && <EditProfileButton user={user} />}
      </Flex>
      <UserDetails user={user} />
    </Flex>
  );
};

export default UserInfo;
