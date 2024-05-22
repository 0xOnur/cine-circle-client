import { Flex } from "@chakra-ui/react";
import SearchHeader from "./Header";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import SearchResults from "./Results";
import useSearchMulti from "hooks/TanStack/Query/Search/useSearchMulti";
import { MediaType } from "types/tmdb/Types";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("query");
  let media_type = (searchParams.get("media_type") as MediaType) || "movie";

  useEffect(() => {
    if (!query) {
      navigate("/");
      return;
    }

    const validMediaTypes: MediaType[] = ["movie", "tv", "person"];
    if (!validMediaTypes.includes(media_type)) {
      const newSearchParams = new URLSearchParams({
        query,
        media_type: validMediaTypes.includes(media_type) ? media_type : "movie",
      });
      navigate(`/search?${newSearchParams.toString()}`, { replace: true });
    }
  }, [query, media_type, navigate]);

  const {
    data: multiData,
    status,
    refetch,
    isRefetching,
  } = useSearchMulti({
    query: query!,
  });

  return (
    <Flex direction="column" gap={8}>
      <SearchHeader query={query} total_results={multiData?.total_results} />

      {status === "pending" && <PendingStatus count={6} height="50px" />}

      {status === "error" && (
        <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
      )}

      {status === "success" && (
        <Flex direction="column">
          {multiData && (
            <SearchResults
              multiData={multiData}
              query={query!}
              media_type={media_type}
            />
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default SearchPage;
