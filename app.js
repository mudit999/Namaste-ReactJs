import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = React.createElement(
  "h1",
  {
    key: "h1",
  },
  "heading 1"
);

const heading = <h1>Hello, this is a React element</h1>;

// React components
// - Functional components - NEW
// - Class Based components - OLD

const HeaderComponent = () => {
  return (
    <div>
      {/* {heading} */}
      {/* <HeaderComponent2 /> */}
      {HeaderComponent2()}
      <h2>Namaste React functional components </h2>
    </div>
  );
};

const HeaderComponent2 = () => (
  <h1>Namaste React functional components HeaderComponent2</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//  rendering react element
// root.render(heading);

// rendering Functional components
root.render(<HeaderComponent />);
