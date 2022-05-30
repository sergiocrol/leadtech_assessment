/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { ISliderNav } from "./props/slider-nav.props";
import { IData } from "../data/data.interface";
import data from "../data/slider.json";
import { ProgressBar } from "./progress-bar.component";
import { getData } from "../services/slides.services";

export const SliderNav: React.FC<ISliderNav> = (props) => {
  const { onChangeSlide } = props;

  const [loading, setLoading] = React.useState<boolean>(false);
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const [currentSlide, setCurrentSlide] = React.useState<IData | undefined>(
    undefined
  );

  const onMoveSlide = (action: "add" | "extract") => {
    let index = slideIndex;
    setSlideIndex(
      (prevNumber) =>
        (index = action === "add" ? prevNumber + 1 : prevNumber - 1)
    );

    setLoading(true);
    getData(index)
      .then((data) => {
        setLoading(false);
        setCurrentSlide(data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    if (currentSlide) {
      onChangeSlide(currentSlide);
    }
  }, [currentSlide]);

  React.useEffect(() => {
    if (data.dataImages.length) {
      setCurrentSlide(data.dataImages[slideIndex]);
    }
  }, []);

  return (
    <div className="slider">
      <div className="slider-load">
        <ProgressBar loading={loading} />
      </div>
      <div className="slider-buttons">
        <div onClick={() => onMoveSlide("extract")}>
          {currentSlide?.linkprev}
        </div>
        <div onClick={() => onMoveSlide("add")}>{currentSlide?.linknext}</div>
      </div>
    </div>
  );
};
