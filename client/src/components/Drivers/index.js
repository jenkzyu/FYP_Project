import React from "react";
import Icon1 from "../../images/svg-3.svg";
import {
  DriversContainer,
  DriversH1,
  DriversWrapper,
  DriversCard,
  DriversIcon,
  DriversH2,
  DriversP,
} from "./DriversElements";

const Drivers = () => {
  return (
    <DriversContainer id="drivers">
      <DriversH1>Drivers</DriversH1>
      <DriversWrapper>
        <DriversCard>
          <DriversIcon src={Icon1} />
          <DriversH2>Driver Name here</DriversH2>
          <DriversP>Driver Profile here</DriversP>
        </DriversCard>
        <DriversCard>
          <DriversIcon src={Icon1} />
          <DriversH2>Driver Name here</DriversH2>
          <DriversP>Driver Profile here</DriversP>
        </DriversCard>
        <DriversCard>
          <DriversIcon src={Icon1} />
          <DriversH2>Driver Name here</DriversH2>
          <DriversP>Driver Profile here</DriversP>
        </DriversCard>
      </DriversWrapper>
    </DriversContainer>
  );
};

export default Drivers;
