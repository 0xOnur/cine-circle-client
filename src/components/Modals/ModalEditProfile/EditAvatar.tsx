import { Button, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";

interface IProps {
  userData: IUser;
  previewUrl: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditAvatar = ({ userData, previewUrl, handleFileChange }: IProps) => {
  return (
    <Flex direction="column" align="center" gap={3}>
      <Image
        src={previewUrl || userData.avatar || "https://via.placeholder.com/150"}
        alt="avatar preview"
        boxSize="150px"
        objectFit="cover"
        borderRadius="full"
      />
      <Button
        onClick={() => document.getElementById("file-input")?.click()}
        color="white"
        size="sm"
        bg={"darkPurple.600"}
        _hover={{ bg: "darkPurple.700" }}
      >
        Change Avatar
      </Button>
      <Input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </Flex>
  );
};

export default EditAvatar;
