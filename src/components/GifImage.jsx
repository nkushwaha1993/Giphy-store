import React, { useState, forwardRef } from "react";

const GifImage = ({ gif }, ref) => {
  const [source, setSource] = useState(gif.images.downsized.url);
  const onGifSelect = () => {
    source === gif.images.original_still.url
      ? setSource(gif.images.downsized.url)
      : setSource(gif.images.original_still.url);
  };

  return (
    <div
      key={gif.id}
      ref={ref}
      className="gif-image"
      onClick={() => onGifSelect()}
    >
      <img src={source} alt={gif.title} />
    </div>
  );
};

export default forwardRef(GifImage);
