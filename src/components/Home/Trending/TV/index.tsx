import useGetTrendingShows from "hooks/TanStack/Query/Trend/useGetTrandingShows";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import SliderContainer from "@components/Shared/SliderContainer";
import PosterCard from "@components/Shared/Poster";
import SeeMore from "@components/Shared/Others/SeeMore";
import { Fragment, useState } from "react";
const TVShowSlider = () => {
  const [time_window, setTime_window] = useState<"day" | "week">("day");

  const dayQuery = useGetTrendingShows({
    time_window: "day",
  });

  const weekQuery = useGetTrendingShows({
    time_window: "week",
  });

  const { data, status, refetch, isRefetching } =
    time_window === "day" ? dayQuery : weekQuery;

  const shows = data?.results;

  return (
    <Fragment>
      {status === "pending" && <PendingStatus count={5} />}
      {status === "error" && (
        <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
      )}
      {status === "success" && (
        <SliderContainer
          sectionTitle="Popular TV Shows"
          sectionHref={`/tv-shows/trending/${time_window}`}
          time_window={time_window}
          setTime_window={setTime_window}
          footer={
            <SeeMore href={ `/tv-shows/popular`} />
          }
        >
          {shows?.map((show, index) => (
            <PosterCard
              key={show.id}
              id={show.id}
              name={show.name}
              imageUrl={show.poster_path}
              mediaType={show.media_type}
              layout="flex"
              isLastItem={index === shows.length - 1}
            />
          ))}
        </SliderContainer>
      )}
    </Fragment>
  );
};

export default TVShowSlider;
