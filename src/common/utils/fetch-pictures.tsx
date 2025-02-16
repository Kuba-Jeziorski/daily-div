import { PicturePage } from "../../constants/types";
import { getPicturesUrl } from "./get-pictures-url";

export const fetchPictures = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<PicturePage> => {
  const url = getPicturesUrl({ pageParam });

  const res = await fetch(url);
  const data = await res.json();

  return {
    results: data.results,
    total: data.total,
    total_pages: data.total_pages,
  };
};
