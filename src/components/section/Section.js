import React from "react";
import PropTypes from 'prop-types'

function Section({title, child}) {
    return (
        <>
        <h2>{title}</h2>
        {child}
        </>
    )
}

Section.prototype = {
    child: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
}


export default Section