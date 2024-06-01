import { IRatingResponse } from "hooks/TanStack/Query/Rating/useGetMediaRatings";
import PopoverRating from "@components/Popover/PopoverRating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { RootState } from "@redux/config/store";
import { IconButton } from "@chakra-ui/react";
import { useSelector } from "react-redux";

interface IProps {
  tmdbID: number;
  mediaType: "tv" | "movie";
  reviews: IRatingResponse;
}

const RateButton = ({ tmdbID, mediaType, reviews }: IProps) => {
  const reduxUser = useSelector((state: RootState) => state.user);

  const myRating = reviews?.ratings?.find(
    (rating) => rating.userId?._id === reduxUser.user?._id
  );

  return (
    <PopoverRating
      tmdbID={tmdbID}
      mediaType={mediaType}
      myRating={myRating}
      trigger={
        <IconButton
          isDisabled={!reduxUser.isAuth}
          _disabled={{
            opacity: 1,
          }}
          isRound={true}
          aria-label="Add to list"
          color="white"
          bgColor="darkPurple.700"
          _hover={{
            bg: "darkPurple.500",
          }}
          icon={
            myRating && myRating.rating > 0 ? (
              <FaStar size={24} fill="#FFB800" />
            ) : (
              <FaRegStar size={24} />
            )
          }
        />
      }
    />
  );
};

export default RateButton;
