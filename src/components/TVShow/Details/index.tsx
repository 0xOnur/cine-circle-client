import useGetShowDetails from "hooks/TanStack/Query/useGetTVShowDetails";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Container, Grid } from "@chakra-ui/react";
import { Fragment } from "react";
import ShowDetailMeta from "./ShowDetailMeta";
import BackdropImage from "@components/Shared/DetailsPage/BackdropImage";
import Title from "@routes/Title";

interface IProps {
  showId: string | undefined;
}

const TVShowDetailsPage = ({ showId }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetShowDetails({
    showId: showId!,
  });

  return (
    <Fragment>
      {status === "pending" && <PendingStatus count={5} />}
      {status === "error" && (
        <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
      )}

      {status === "success" && data && (
        <Fragment>
          <Title title={data.name} />
          <Container maxW={"8xl"} px={{ base: 6, md: 10 }} pt={14}>
            <BackdropImage backdrop_path={data.backdrop_path} />
            <Grid paddingX={8} gridGap={[8, 16]}>
              <Grid rowGap={8} flexBasis={["100%"]}>
                <ShowDetailMeta data={data} />
              </Grid>

              <Grid
                gap={8}
                alignItems="center"
                templateColumns={{
                  base: "minmax(0, 1fr)",
                  md: "1fr minmax(0, 2fr)",
                }}
                flexBasis={["100%"]}
              >
                {/* <MovieDetailAdditionalInfo data={data} id={movieId ?? 0} />

            <CastsWrapper credits={credits} /> */}
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default TVShowDetailsPage;
