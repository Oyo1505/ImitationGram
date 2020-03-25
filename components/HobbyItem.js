import React, { Fragment } from 'react';

const HobbyItem = (props) => {
  return (
    <Fragment><span className={`icon icon-${props.hobby.className}`}></span><h3 className="hobby-title">{props.hobby.name}</h3></Fragment>
  )
}

export default HobbyItem;