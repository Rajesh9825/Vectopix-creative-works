import { useState } from "react";

const ImageViewer = ({ images }) => {

  const [index, setIndex] = useState(0);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">

      <button
        onClick={() => setIndex(index - 1)}
        className="absolute left-10 text-white text-3xl"
      >
        ◀
      </button>

      <img
        src={images[index]}
        className="max-h-[80vh]"
      />

      <button
        onClick={() => setIndex(index + 1)}
        className="absolute right-10 text-white text-3xl"
      >
        ▶
      </button>

    </div>
  );
};

export default ImageViewer;