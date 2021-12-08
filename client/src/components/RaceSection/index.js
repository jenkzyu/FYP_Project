import React, { useState } from "react";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElements";
import {
  RaceContainer,
  RaceBg,
  VideoBg,
  RaceContent,
  RaceH1,
  RaceP,
  RaceBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./RaceElements";

const RaceSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <RaceContainer id="home">
      <RaceBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </RaceBg>
      <RaceContent>
        <RaceH1>Fun Formula 1 Racing</RaceH1>
        <RaceP>Sign up to find the latest news and updates of F1 racing.</RaceP>
        <RaceBtnWrapper>
          <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </RaceBtnWrapper>
      </RaceContent>
    </RaceContainer>
  );
};

export default RaceSection;
