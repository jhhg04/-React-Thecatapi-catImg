import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import interfaces from "../utils/interface";
import sleep from "../utils/sleep";

const IMAGE_SIZE = 300;

export default () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const button = document.querySelector(".result button");
    imageWidth === IMAGE_SIZE + "px" && button.classList.remove("invisible");
  }, [imageWidth]);

  async function generateImage() {
    setImage(null);
    setLoading(true);
    setImageWidth(0);

    await setTimeout(async () => {
      setImage(await interfaces.getImage());
      setLoading(false);
      const image = document.querySelector("img");
      image.addEventListener("load", async () => {
        let tick = 0;
        while (tick < IMAGE_SIZE) {
          tick += 2;
          setImageWidth(`${tick}px`);
          await sleep(1);
        }
      });
    }, 1000);
  }

  const view = () => {
    if (!loading && !image) {
      return (
        <div className="get-fact">
          <Button className="main-button" onClick={() => generateImage()}>
            Start
          </Button>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="loading">
          <span role="img" aria-label="cat-face">
            🙀
          </span>
        </div>
      );
    }

    if (!loading && imageWidth === 0) {
      return (
        <div className="loading">
          <span role="img" aria-label="cat-face">
            😻
          </span>
          <img src={image} alt="cat" width={imageWidth} height="auto" />
        </div>
      );
    }

    if (!loading && image) {
      return (
        <div className="result">
          <img src={image} alt="cat" width={imageWidth} height="auto" />
          <Button
            className="main-button invisible"
            onClick={() => generateImage()}
          >
            Next Image
          </Button>
        </div>
      );
    }
  };

  return <div className="starter">{view()}</div>;
};
