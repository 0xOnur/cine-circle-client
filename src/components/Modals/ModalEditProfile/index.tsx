import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

interface IProps {
  user: IUser;
  isOpen: boolean;
  onClose: () => void;
}

const ModalEditProfile = ({ user, isOpen, onClose }: IProps) => {
  const [userData, setUserData] = useState<IUser>(user);

  const isChanged = userData !== user;

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      motionPreset="scale"
      closeOnOverlayClick={false}
    >
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody py={5}>
          <EditProfileForm
            isChanged={isChanged}
            userData={userData}
            setUserData={setUserData}
            onClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditProfile;
