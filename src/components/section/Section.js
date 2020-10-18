import React from "react";

function Section({title, child}) {
    return (
        <>
        <h2>{title}</h2>
        {child}
        </>
    )
}

export default Section