import useGetTrendingMovies from "hooks/TanStack/Query/useGetTrendingMovies";
import PendingStatus from "../Shared/Status/PendingStatus";
import ErrorStatus from "../Shared/Status/ErrorStatus";
import SliderContainer from "../Shared/SliderContainer";
import { Fragment, useState } from "react";
import PosterCard from "../Shared/Poster";

const MovieSlider = () => {
  const [time_window, setTime_window] = useState<"day" | "week">("day");

  const dayQuery = useGetTrendingMovies({
    time_window: "day",
  });

  const weekQuery = useGetTrendingMovies({
    time_window: "week",
  });

  const { data, status, refetch, isRefetching } =
    time_window === "day" ? dayQuery : weekQuery;

  const movies = data?.results;

  return (
    <Fragment>
      {status === "pending" && <PendingStatus count={5} />}
      {status === "error" && (
        <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
      )}
      {status === "success" && (
        <SliderContainer
          sectionTitle="Popular Movies"
          time_window={time_window}
          setTime_window={setTime_window}
        >
          {movies?.map((movie, index) => (
            <PosterCard
              key={movie.id}
              id={movie.id}
              name={movie.title}
              imageUrl={movie.poster_path}
              mediaType={movie.media_type}
              layout="flex"
              isLastItem={index === movies.length - 1}
            />
          ))}
        </SliderContainer>
      )}
    </Fragment>
  );
};

export default MovieSlider;
