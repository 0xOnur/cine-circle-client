import { IconButton, Tooltip } from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import { FaList } from "react-icons/fa";

const ListButton = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Tooltip
      label={isAuth ? "Add to list" : "Login to add to list"}
      aria-label="Add to list"
    >
      <IconButton
        isDisabled={!isAuth}
        _disabled={{
          opacity: 1,
        }}
        isRound={true}
        aria-label="Add to list"
        bgColor="darkPurple.700"
        color="white"
        _hover={{
          bg: "darkPurple.400",
        }}
        icon={<FaList />}
      />
    </Tooltip>
  );
};

export default ListButton;
