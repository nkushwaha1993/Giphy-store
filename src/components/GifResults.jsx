import React, { useCallback, useRef } from "react";
import GifImage from "./GifImage";

const GifResults = ({ results, showLoader, setOffset }) => {
  const observer = useRef();

  const lastGifIndex = useCallback(
    (element) => {
      if (showLoader) return;
      observer.current && observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        entries[0].isIntersecting && setOffset((prevOffset) => prevOffset + 50);
      });
      element && observer.current.observe(element);
    },
    [showLoader]
  );

  return (
    <div className="gif-results">
      {results &&
        results?.map((gif, index) => {
          if (results.length === index + 1) {
            return <GifImage ref={lastGifIndex} key={gif.id} gif={gif} />;
          } else {
            return <GifImage key={gif.id} gif={gif} />;
          }
        })}
    </div>
  );
};

export default GifResults;
