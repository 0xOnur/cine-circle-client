import { Box, Text } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import React from "react";

interface IProps {
  budget: number;
  revenue: number;
}

const Budget = ({ budget, revenue }: IProps) => {
  if (!budget || !revenue) {
    return null;
  }
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box>
        <SectionTitle sectionTitle="Budget" fontSize="sm" />
        <Text fontWeight="500" color="gray.500" fontSize="sm">
          {budget.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </Box>

      <Box>
        <SectionTitle sectionTitle="Revenue" fontSize="sm" />
        <Text fontWeight="500" color="gray.500" fontSize="sm">
          {revenue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </Box>
    </Box>
  );
};

export default Budget;
