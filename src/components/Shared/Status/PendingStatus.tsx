import { Skeleton, Stack } from "@chakra-ui/react";

interface IProps {
  count?: number;
  height?: string;
}

const PendingStatus = ({ count = 1, height = "20px" }: IProps) => {
  return (
    <Stack>
      {count &&
        Array.from(Array(count)).map((_, index) => (
          <Skeleton
            startColor="darkPurple.100"
            endColor="darkPurple.300"
            borderRadius="md"
            key={index}
            height={height}
          />
        ))}
    </Stack>
  );
};

export default PendingStatus;
