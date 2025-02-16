import {
  BASE_URL,
  NUMBER_OF_PICTURES,
  QUERY_NAME,
} from "../../constants/constants";

import config from "../../../config.json";

type PageParam = {
  pageParam: number | undefined;
};

export const getPicturesUrl = ({ pageParam = 1 }: PageParam): string => {
  const { ACCESS_KEY } = config;

  const urlObj = {
    query: QUERY_NAME,
    per_page: NUMBER_OF_PICTURES.toString(),
    page: pageParam.toString(),
    client_id: ACCESS_KEY,
  };

  const searchParams = new URLSearchParams(urlObj);
  return `${BASE_URL}/search/photos?${searchParams.toString()}`;
};
