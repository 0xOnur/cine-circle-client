import { searchPeople } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { IPerson } from "types/tmdb/Person/IPerson";

interface IProps {
  query: string;
  page: number;
}

interface IResponseData {
  page: number;
  results: IPerson[];
  total_pages: number;
  total_results: number;
}

const useSearchPerson = ({ query, page }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IResponseData>({
    queryKey: ["searchPerson", query, page],
    queryFn: () => searchPeople(query, page),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useSearchPerson;
