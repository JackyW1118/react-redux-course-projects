import React, { useState, useRef } from "react";

const AccordionTest = ({ items }) => {
  const [openedIndex, setOpenedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    let active = openedIndex == index ? "active" : "";
    return (
      <React.Fragment key={index}>
        <div
          className={`title ${active}`}
          onClick={(e) => setOpenedIndex(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p className="transition visible">{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default AccordionTest;
