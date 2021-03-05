import React, { useState, useEffect, useRef } from "react";

const DropDown = ({ options, selected, onSelectedChange, label }) => {
  //keep track of whether dropdown is open
  const [open, setOpen] = useState(false);

  //useRef hook, make ref to the outer most div of this component
  const ref = useRef();

  //only run once, bind eventListener to body to listen to click on body to close the dropdown
  useEffect(() => {
    const onBodyClick = (event) => {
      /*if element clicked is inside the component do not execute because the
         because the setOpen in the component will be executed*/
      if (ref.current && ref.current.contains(event.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    //clean up this ref when component removed
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    //hide item that is already selected
    if (option.value === selected.value) return null;

    return (
      <div
        key={option.value}
        className="item"
        onClick={(e) => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          //event bubbling will cause onClick to execute when onClick of the renderedOptions is triggered
          //therefore the dropdown collapses when an option is selected
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
