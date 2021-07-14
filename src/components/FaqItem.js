import React, { useState } from "react";

export const FaqItem = ({ title, content }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className={active ? 'accordion-title active' : 'accordion-title'} onClick={() => setActive(!active)}>
        <h3>{title}</h3>
        <h3>{active ? '-' : '+'}</h3>
      </div>
      {active && <p className="accordion-content">{content}</p>}
    </div>
  );
};
