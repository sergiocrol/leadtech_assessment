import React from "react";

import { SliderNav } from "../components/slider-nav.component";
import { Box } from "../components/box.component";
import { IHome } from "./props/home.props";
import { Wrapper } from "../components/wrapper.component";
import { IData } from "../data/data.interface";

const BACKGROUND_DEFAULT = "images/background.jpg";
const IMAGE_DEFAULT = "images/rocket.png";
const BUTTON_DEFAULT = "Start your trip >";
const TITLE_DEFAULT = "Visa to the moon";
const SUBTITLE_DEFAULT = "Your trip start here";
const HEADER_IMAGE_DEFAULT = "images/rock.jpg";
const FOOTER_DEFAULT = "Explore the surface";
const FOOTER_IMAGE_DEFAULT = "images/background_moon.png";
const HASHES_DEFAULT = ["moontrip", "visamoon", "moontickets"];
const ICON_DEFAULT = "images/icon_rocket.png";
const LOGO_DEFAULT = "images/logo.png";

export const Home: React.FC<IHome> = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState<IData | undefined>(
    undefined
  );

  const getHashes = (hash: string | undefined) => {
    if (!hash) {
      return HASHES_DEFAULT;
    }

    return hash.split("#").map((hash) => hash.trim());
  };

  const onChangeSlide = (slide: IData) => {
    setCurrentSlide(slide);
  };

  return (
    <React.Fragment>
      <Wrapper
        title={{
          content: currentSlide?.title || TITLE_DEFAULT,
          className: "wrapper-title",
        }}
        logo={{
          src: currentSlide?.logo || LOGO_DEFAULT,
          className: "wrapper-logo",
        }}
        cta={{
          label: currentSlide?.button || BUTTON_DEFAULT,
          onClick: () =>
            window.open("https://linkedin.com/in/sergio-cordero-rol"),
          className: "wrapper-cta",
        }}
      />
      <div className="grid">
        <Box
          className="box1"
          imgSrc={currentSlide?.headerImage || HEADER_IMAGE_DEFAULT}
          imgAlt="rock"
          animatable="fade"
        />
        <Box
          className="box3"
          imgSrc={currentSlide?.bgImage || BACKGROUND_DEFAULT}
          imgAlt="astronaut"
        >
          <div className="box--absolute">
            <Box
              className="box2"
              imgSrc={currentSlide?.imageRocket || IMAGE_DEFAULT}
              imgAlt="rocket"
              animatable={window.innerWidth < 768 ? "fade" : "flip"}
            />
            <SliderNav onChangeSlide={onChangeSlide} />
            <Box
              className="box5"
              imgSrc={currentSlide?.iconTrip || ICON_DEFAULT}
              imgAlt="icon-rocket"
              text={{
                content: currentSlide?.subtitle || SUBTITLE_DEFAULT,
                className: "box-title",
              }}
              hash={{
                hashes: getHashes(currentSlide?.hash),
                className: "box-hash",
              }}
            />
          </div>
        </Box>
        <Box
          className="box4"
          imgSrc={currentSlide?.footerImage || FOOTER_IMAGE_DEFAULT}
          imgAlt="moon"
          text={{
            content: currentSlide?.footer || FOOTER_DEFAULT,
            className: "box-footer",
          }}
        />
      </div>
    </React.Fragment>
  );
};
