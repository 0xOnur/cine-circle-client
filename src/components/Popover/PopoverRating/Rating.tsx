import React, { useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IconButton, Flex } from "@chakra-ui/react";

interface RatingProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

const Rating = ({ rating, setRating }: RatingProps) => {
  const size = 24;
    const scale = 10;
    
    useEffect(() => {
    }, [rating]);

  const onClick = (idx: number) => {
    if (!isNaN(idx)) {
      if (rating === 1 && idx === 1) {
        setRating(0);
      } else {
        setRating(idx);
      }
    }
  };

  return (
    <Flex justify="space-between" align="center">
      {Array.from({ length: scale }, (_, i) => (
        <IconButton
          key={i}
          size="sm"
          aria-label={`Rate ${i + 1}`}
          variant="unstyled"
          onClick={() => onClick(i + 1)}
          _focus={{ outline: 0 }}
          icon={
            i < rating ? (
              <FaStar size={size} color="#FFB800" />
            ) : (
              <FaRegStar size={size} color="#FFB800" />
            )
          }
        />
      ))}
    </Flex>
  );
};

export default Rating;
