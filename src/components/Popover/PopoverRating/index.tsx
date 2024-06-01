import {
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Rating from "./Rating";
import useRateMedia from "hooks/TanStack/Mutation/Rating/useRateMedia";
import { FaTrash } from "react-icons/fa";
import useDeleteRate from "hooks/TanStack/Mutation/Rating/useDeleteRate";

interface IProps {
  tmdbID: number;
  mediaType: "tv" | "movie";
  myRating?: IRating;
  trigger: React.ReactNode;
}

const PopoverRating = ({ tmdbID, mediaType, myRating, trigger }: IProps) => {
  const [rating, setRating] = useState(myRating?.rating || 0);
  console.log("🚀 ~ PopoverRating ~ rating:", rating);

  const { mutate, isPending } = useRateMedia({
    tmdbID: tmdbID.toString(),
    mediaType,
    rating,
  });

  const { mutate: deleteRating, isPending: deletePending } = useDeleteRate({
    tmdbID: tmdbID.toString(),
  });

  return (
    <Popover
      isLazy
      onClose={() => (myRating ? setRating(myRating.rating) : setRating(0))}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <Portal>
        <PopoverContent
          w="full"
          bg={useColorModeValue("white", "darkPurple.700")}
        >
          <PopoverArrow />
          <PopoverHeader>
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
              {myRating ? "Update Your Rating" : "How Would You Rate?"}
            </Text>
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody display="flex">
            <Rating rating={rating} setRating={setRating} />
          </PopoverBody>
          <PopoverFooter
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {rating > 0 && <Text fontWeight="bold">Rating: {rating}</Text>}
            <Box display="flex" gap={2}>
              {myRating && myRating.rating > 0 && (
                <Button
                  colorScheme="red"
                  isLoading={deletePending}
                  variant="outline"
                  size="sm"
                  leftIcon={<FaTrash />}
                  onClick={() => {
                    setRating(0);
                    deleteRating();
                  }}
                >
                  Delete
                </Button>
              )}

              {rating > 0 && (
                <Button
                  colorScheme="darkPurple"
                  color="white"
                  size="sm"
                  isDisabled={rating === myRating?.rating}
                  isLoading={isPending}
                  onClick={() => {
                    mutate();
                  }}
                >
                  Save
                </Button>
              )}
            </Box>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default PopoverRating;
