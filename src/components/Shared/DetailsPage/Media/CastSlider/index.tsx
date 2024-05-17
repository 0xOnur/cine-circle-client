import React, { Fragment } from "react";
import useGetMediaCredits from "hooks/TanStack/Query/useGetMediaCredits";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import SliderContainer from "@components/Shared/SliderContainer";
import PosterCard from "@components/Shared/Poster";
import { Flex } from "@chakra-ui/react";
import FullCastCrewButton from "./FullCastCrewButton";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";

interface IProps {
  mediaId: string;
  mediaType: "movie" | "tv";
}

const CastSlider = ({ mediaId, mediaType }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetMediaCredits({
    mediaId: mediaId,
    mediaType: mediaType,
  });

  const castItems = data?.cast.slice(0, 10);

  return (
    <Fragment>
      {status === "pending" && <PendingStatus count={6} height="50px" />}
      {status === "error" && (
        <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
      )}

      {status === "success" && castItems && (
        <Flex direction="column">
          {castItems.length > 0 && (
            <SliderContainer
              sectionTitle="Cast"
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
              sectionTitle="Cast"
              text="There are no cast members for this movie."
            />
          )}
        </Flex>
      )}
    </Fragment>
  );
};

export default CastSlider;
