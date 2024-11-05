import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-dropdown">
      <div onClick={toggle}>
        <h3>{title}</h3>
        <button>
          <i
            className={`fa-solid ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </button>
      </div>
      {typeof content === "string"? (
        <p>{content}</p>
      ) : content instanceof Array ? (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
