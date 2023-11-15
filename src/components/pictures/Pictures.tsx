import React from "react";
import "./pictures.css";
import Gallery from "react-image-gallery";
import LazyLoad from "react-lazyload";
import "react-image-gallery/styles/css/image-gallery.css";
declare var require: any;

const Pictures = () => {
  const generateImages: any = [];

  for (let i = 1; i < 15; i++) {
    generateImages.push({
      original: require(`../../assets/img${i + 1}.jpg`),
      thumbnail: require(`../../assets/img${i + 1}.jpg`),
      originalHeight: "500px",
    });
  }

  console.log("qwe", generateImages);

  return (
    <section id="images">
      {/* <h5></h5> */}
      <div className="section__title">
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          US
        </h1>
      </div>
      <div>
        <LazyLoad height={200} offset={100}>
          <Gallery
            items={generateImages}
            lazyLoad
            showFullscreenButton={false}
            showThumbnails={false}
            showPlayButton={false}
          />
        </LazyLoad>
      </div>
    </section>
  );
};

export default Pictures;
