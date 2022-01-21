import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  const makeStarArray = () => {
    const result = [];
    let val = value;

    while (val > 0.5) {
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
        return (
          <span>
            <i style={{ color }} class={displayStars(val)}></i>
          </span>
        );
      })}{" "}
      <span>({text && text})</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFD700",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Rating;
