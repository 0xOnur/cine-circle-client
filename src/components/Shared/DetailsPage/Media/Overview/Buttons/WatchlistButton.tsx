import { IconButton, Tooltip, useToast } from "@chakra-ui/react";
import { AppDispatch, RootState } from "@redux/config/store";
import { useDispatch, useSelector } from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { addToWatchlist, removeFromWatchlist } from "@api/watchlist.api";

interface IProps {
  tmdbID: number;
  mediaType: "tv" | "movie";
}

const WatchlistButton = ({ tmdbID, mediaType }: IProps) => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const watchlist = useSelector((state: RootState) => state.watchlist);
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();

  const isAdded = watchlist.data?.medias.some(
    (media) => Number(media.tmdbID) === tmdbID
  );

  const successToast = (message: string) =>
    toast({
      title: message,
      status: "success",
    });

  const errorToast = (message: string) =>
    toast({
      title: message,
      status: "error",
    });

  const handleWatchlist = () => {
    const media = {
      tmdbID,
      mediaType,
    };
    if (isAdded) {
      dispatch(removeFromWatchlist(media)).then((res) => {
        res.meta.requestStatus === "fulfilled"
          ? successToast("Removed from watchlist")
          : errorToast(watchlist.error || "Failed to remove from watchlist");
      });
    } else {
      dispatch(addToWatchlist(media)).then((res) => {
        res.meta.requestStatus === "fulfilled"
          ? successToast("Added to watchlist")
          : errorToast(watchlist.error || "Failed to add to watchlist");
      });
    }
  };

  return (
    <Tooltip
      label={
        isAuth
          ? isAdded
            ? "Remove from Watchlist"
            : "Add to Watchlist"
          : "Login to add to Watchlist"
      }
      aria-label="Add to Watchlist"
      hasArrow
      bg="darkPurple.700"
    >
      <IconButton
        onClick={handleWatchlist}
        isDisabled={!isAuth}
        _disabled={{
          opacity: 1,
        }}
        isRound={true}
        aria-label="Add to Watchlist"
        bgColor="darkPurple.700"
        color="white"
        _hover={{
          bg: "darkPurple.500",
        }}
        icon={isAdded ? <FaBookmark fill="#FFB800" /> : <FaRegBookmark />}
      />
    </Tooltip>
  );
};

export default WatchlistButton;
