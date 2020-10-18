import React from "react"

const Feedback = ({options}) => {
  return (
  <>
      <button
      id={'good'}
      onClick={(e) => {options(e.target.id)}}
       >Good</button>

      <button
      id={'neutral'}
      onClick={(e) => {options(e.target.id)}}
      >Neutral</button>

      <button
      id={'bad'}
      onClick={(e) => {options(e.target.id)}}
      >Bad</button>
      </>
      )}
       

  export default Feedback