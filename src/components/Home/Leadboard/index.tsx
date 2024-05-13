import SectionTitle from "@components/Shared/SectionTitle";
import LeadboardTable from "./Table";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

const LeadboardSection = () => {
  const [time_period, setTime_period] = useState<"week" | "all">("week");

  const weekData = [
    {
      username: "onur",
      avatar: "https://bit.ly/dan-abramov",
      watched: 400,
      reviews: 40,
    },
    {
      username: "john",
      avatar: "https://bit.ly/john-smith",
      watched: 300,
      reviews: 30,
    },
    {
      username: "emma",
      avatar: "https://bit.ly/emma-smith",
      watched: 200,
      reviews: 20,
    },
    {
      username: "alex",
      avatar: "https://bit.ly/alex-jones",
      watched: 100,
      reviews: 10,
    },
    {
      username: "sarah",
      avatar: "https://bit.ly/sarah-brown",
      watched: 50,
      reviews: 5,
    },
  ];

  const allTimeData = [
    {
      username: "onur",
      avatar: "https://bit.ly/dan-abramov",
      watched: 1400,
      reviews: 240,
    },
    {
      username: "john",
      avatar: "https://bit.ly/john-smith",
      watched: 1200,
      reviews: 180,
    },
    {
      username: "emma",
      avatar: "https://bit.ly/emma-smith",
      watched: 900,
      reviews: 120,
    },
    {
      username: "alex",
      avatar: "https://bit.ly/alex-jones",
      watched: 800,
      reviews: 100,
    },
    {
      username: "sarah",
      avatar: "https://bit.ly/sarah-brown",
      watched: 700,
      reviews: 80,
    },
  ];

  const tableData = time_period === "week" ? weekData : allTimeData;

  return (
    <Flex
      direction="column"
      overflowX="hidden"
      width="full"
      alignItems={{
        base: "center",
        md: "start",
      }}
    >
      <SectionTitle sectionTitle="Leadboard" />

      <LeadboardTable
        tableData={tableData}
        time_period={time_period}
        setTime_period={setTime_period}
      />
    </Flex>
  );
};

export default LeadboardSection;
