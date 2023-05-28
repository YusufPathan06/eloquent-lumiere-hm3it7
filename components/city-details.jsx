import React from "react";

const CityDetails = ({ city }) => {
  const abbre = (cityName) => {
    if (cityName.length > 7) {
      return `${cityName.substring(0, 8)}....`;
    }
    return cityName;
  };
  return (
    <div className="feedsContent">
      <div className="cityDetails">
        <span className="cityText">{abbre(city?.meta?.city ?? "City")}</span>
        <span className="cityTemp">
          {city?.meta?.city?.weather?.current?.temperature ?? "24"}&deg;
        </span>
      </div>
      <div className="tempDetails">
        <span>
          {city?.meta?.city?.weather?.current?.comment ?? "Clear Skies"}
        </span>
        <span className="tempDetailsText">
          H: {city?.meta?.city?.weather?.tomorrow?.max ?? "33"}˚| L:{" "}
          {city?.meta?.city?.weather?.tomorrow?.min ?? "21"}˚
        </span>
      </div>
    </div>
  );
};

export default CityDetails;
