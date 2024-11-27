import React from "react";
import Typed from "typed.js";

function TypedText() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Jobs", "Opportunities", "Events", "Tenders"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default TypedText;
