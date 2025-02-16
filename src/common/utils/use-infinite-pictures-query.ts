import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPictures } from "./fetch-pictures";

export const useInfinitePicturesQuery = () => {
  return useInfiniteQuery({
    queryKey: ["pictures"],
    queryFn: ({ pageParam = 1 }) => fetchPictures({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      pages.length < lastPage.total_pages ? pages.length + 1 : undefined,
  });
};
