import useGetTrendingMovies from "hooks/TanStack/Query/Trend/useGetTrendingMovies";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import SliderContainer from "@components/Shared/SliderContainer";
import PosterCard from "@components/Shared/Poster";
import SeeMore from "@components/Home/Trending/SeeMore";
import { Fragment, useState } from "react";

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
          sectionHref={`/movies/trending/${time_window}`}
          time_window={time_window}
          setTime_window={setTime_window}
          footer={
            <SeeMore media_type="movies" />
          }
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
