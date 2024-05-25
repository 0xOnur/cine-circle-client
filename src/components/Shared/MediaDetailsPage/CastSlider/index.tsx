import React, { Fragment } from "react";
import SliderContainer from "@components/Shared/SliderContainer";
import PosterCard from "@components/Shared/Poster";
import { Flex } from "@chakra-ui/react";
import FullCastCrewButton from "./FullCastCrewButton";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import { CreditCast } from "types/tmdb/Types";

interface IProps {
  mediaId: number;
  mediaType: "movie" | "tv";
  castData: CreditCast[];
}

const CastSlider = ({ mediaId, mediaType, castData }: IProps) => {
  const castItems = castData?.slice(0, 10);

  if (!castItems) {
    return null;
  }

  return (
    <Fragment>
      {castItems && (
        <Flex direction="column">
          {castItems.length > 0 && (
            <SliderContainer
              sectionTitle="Top Cast"
              sectionHref={`/media/${mediaType}/${mediaId}/credits`}
              footer={
                <FullCastCrewButton
                  href={`/media/${mediaType}/${mediaId}/credits`}
                />
              }
            >
              {castItems?.map((cast, index) => (
                <PosterCard
                  key={cast.id}
                  id={cast.id}
                  name={cast.name}
                  secondText={cast.character}
                  imageUrl={cast.profile_path}
                  mediaType="person"
                  layout="flex"
                  isLastItem={index === castItems.length - 1}
                />
              ))}
            </SliderContainer>
          )}

          {castItems?.length === 0 && (
            <NoItemAlert
              sectionTitle="Top Cast"
              text="There are no cast members for this movie."
            />
          )}
        </Flex>
      )}
    </Fragment>
  );
};

export default CastSlider;
