import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";
import SliderContainer from "@components/Shared/SliderContainer";
import PosterCard from "@components/Shared/Poster";
import { Fragment } from "react";

interface IProps {
  data: ITvShowDetails;
}

const SeasonSlider = ({ data }: IProps) => {
  const seasons = data.seasons.filter(
    (nonSpecials) => nonSpecials.name !== "Specials"
  );

  return (
    <Fragment>
      {seasons.length === 0 && (
        <NoItemAlert
          sectionTitle="Seasons"
          text="There are no seasons available for this TV Show."
        />
      )}

      {seasons.length > 0 && (
        <SliderContainer
          sectionTitle={`Seasons (${data.number_of_seasons})`}
          sectionHref={`/tv-show/${data.id}/seasons`}
        >
          {seasons.map((season, index) => (
            <PosterCard
              key={season.id}
              id={season.id}
              name={`${season.episode_count.toString()} Episodes`}
              imageUrl={season.poster_path}
              mediaType="season"
              layout="flex"
              isLastItem={index === seasons.length - 1}
              secondText={season.name}
            />
          ))}
        </SliderContainer>
      )}
    </Fragment>
  );
};

export default SeasonSlider;
