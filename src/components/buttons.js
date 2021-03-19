import React from "react"

const Buttons = ({ takeValue, getStatisticValue }) => {
    return (
      <>
        <button className="button" 
        id={"start"} onClick={(e) => takeValue()}>
          Start
        </button>

        <button
          className="button"
          id={"stat"}
          onClick={(e) => getStatisticValue()}
        >
          Statistic
        </button>
      </>
    );
}

export default Buttons