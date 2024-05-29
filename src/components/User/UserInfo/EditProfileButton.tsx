import { Button, Text, useDisclosure } from "@chakra-ui/react";
import ModalEditProfile from "@components/Modals/ModalEditProfile";

interface IProps {
  user: IUser;
}

const EditProfileButton = ({ user }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isOpen && (
        <ModalEditProfile user={user} isOpen={isOpen} onClose={onClose} />
      )}
      <Button
        colorScheme="darkPurple"
        color="white"
        size="lg"
        rounded={24}
        bg={"darkPurple.600"}
        _hover={{ bg: "darkPurple.700" }}
        onClick={onOpen}
      >
        <Text>Edit Profile</Text>
      </Button>
    </>
  );
};

export default EditProfileButton;
