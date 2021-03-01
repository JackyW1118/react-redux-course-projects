import React, { useState } from "react";

const Accordion = ({ items }) => {
  //react hook, use array destructuring, first is piece of state and second is func to change state
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    //equivalent to this.setState(), rerender entire component
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div onClick={(e) => onTitleClick(index)} className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
