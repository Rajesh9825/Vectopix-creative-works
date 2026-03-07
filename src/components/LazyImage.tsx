import { useState } from "react";

const LazyImage = ({ src, alt, className }: any) => {

  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${className} transition duration-500 ${
        loaded ? "blur-0 scale-100" : "blur-md scale-105"
      }`}
    />
  );
};

export default LazyImage;