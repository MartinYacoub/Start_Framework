import { useState } from "react";
import Grid from "@mui/joy/Grid";

import image1 from "../../assets/portfolio-1.jpeg";
import image2 from "../../assets/portfolio-2.jpg";
import image3 from "../../assets/portfolio-3.jpg";
import image4 from "../../assets/portfolio-4.jpeg";
import image5 from "../../assets/portfolio-5.jpeg";
import image6 from "../../assets/portfolio-6.jpg";

import ImageShow from "./ImageShow";

function Portfolio() {
  const images = [image1, image2, image3, image4, image5, image6];

  const [selectedImage, setSelectedImage] = useState(null);

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1 }}
    >
      {images.map((img, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <div
            className="h-40 bg-center bg-cover rounded-lg shadow-md cursor-pointer hover:shadow-2xl hover:scale-105 transition-all"
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => setSelectedImage(img)}
          ></div>
        </Grid>
      ))}

      {selectedImage && (
        <ImageShow image={selectedImage} onClose={closeImage} />
      )}
    </Grid>
  );
}

export default Portfolio;
