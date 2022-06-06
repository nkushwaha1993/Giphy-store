import axios from "axios";
import { api_key } from "../utils/constant";
import { GIF_API } from "../utils/endpoint";

export const getGifTrendingLogic = async (offset) => {
  let trendingData = null;
  try {
    trendingData = await axios(GIF_API.TRENDING_API, {
      params: {
        api_key,
        offset
      }
    });
  } catch {
    trendingData = null;
  }

  return trendingData ? trendingData?.data?.data : trendingData;
};

export const getGifDataBySearchLogic = async (inputSearch, offset) => {
  let searchData;
  try {
    searchData = await axios(GIF_API.SEARCH_API, {
      params: {
        api_key,
        q: inputSearch,
        offset
      }
    });
  } catch {
    searchData = null;
  }

  return searchData ? searchData?.data?.data : searchData;
};
