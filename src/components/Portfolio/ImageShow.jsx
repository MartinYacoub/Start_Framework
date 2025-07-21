import { useEffect } from "react";

function ImageShow({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Preview"
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
      />
    </div>
  );
}

export default ImageShow;
