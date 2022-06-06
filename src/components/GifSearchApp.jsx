import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import GifResults from "./GifResults";
import Loader from "../common/Loader";
import Error from "../common/Error";
import {
  getGifTrendingLogic,
  getGifDataBySearchLogic
} from "../services/gif.service";
import { debounceFunc } from "../utils/utils";

const GifSearchApp = () => {
  const [gifData, setGifData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [offset, setOffset] = useState(0);
  const [inputSearch, setInputSearch] = useState("");

  const updateGifResult = (data) => {
    setShowLoader(false);
    setGifData((prevGifData) => [
      ...prevGifData,
      ...data.filter((val) =>
        prevGifData.every((preVal) => val.id !== preVal.id)
      )
    ]);
  };

  useEffect(() => {
    inputSearch
      ? getGifDataBySearchLogic(inputSearch, offset).then((data) => {
          updateGifResult(data);
        })
      : getGifTrendingLogic(offset).then((data) => {
          updateGifResult(data);
        });
  }, [offset, inputSearch]);

  const onSearchChange = (inputSearch) => {
    setGifData([]);
    setShowLoader(true);
    setInputSearch(inputSearch);
  };

  return (
    <>
      <SearchBar onSearchChange={debounceFunc(onSearchChange, 1000)} />
      {gifData == null ? (
        <Error />
      ) : showLoader ? (
        <Loader />
      ) : (
        <GifResults
          results={gifData}
          showLoader={showLoader}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </>
  );
};

export default GifSearchApp;
