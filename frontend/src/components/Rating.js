import React from "react";

const Rating = ({ value, text }) => {
  const makeStarArray = () => {
    const result = [];
    let val = value;
    while (val > 1) {
      result.push(1);
      val -= 1;
    }
    if (val === 0.5) {
      result.push(val);
    }
    return result;
  };

  const starArray = makeStarArray();

  const displayStars = (val) => {
    const FULL_STAR = `fa-solid fa-star`;
    const HALF_STAR = `fa-solid fa-star-half`;
    if (val === 1) return FULL_STAR;
    if (val === 0.5) return HALF_STAR;
  };

  return (
    <div className="my-3">
      {starArray.map((val) => {
        return <i class={displayStars(val)}></i>;
      })}{" "}
      ({text})
    </div>
  );
};

export default Rating;
