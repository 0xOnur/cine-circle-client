import { Image } from "@chakra-ui/react";

interface IProps {
  avatar: string;
}

const UserAvatar = ({ avatar }: IProps) => {
  return (
    <Image
      src={avatar}
      alt="avatar"
      maxW={"300px"}
      rounded={24}
      objectFit="cover"
      fallbackSrc="https://via.placeholder.com/300x450.png?text=No+Poster"
    />
  );
};

export default UserAvatar;
