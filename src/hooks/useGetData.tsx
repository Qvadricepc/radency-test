import { useDebouncedValue } from "./useDebounce.tsx";
import { useQuery } from "@apollo/client";
import { UserData } from "../shared.ts";
import { GET_REPOSITORIES } from "../queries/getRepositories.tsx";

export const useGetData = (search: string) => {
  const debounceSearch = useDebouncedValue(search, 500);

  const { loading, error, data } = useQuery<UserData>(GET_REPOSITORIES, {
    variables: {
      searchTerm: debounceSearch,
    },
    skip: debounceSearch === "",
  });

  return { loading, error, data };
};
