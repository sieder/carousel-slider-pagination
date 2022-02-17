import React from "react";
import Carousel from "./components/Carousel/Carousel";
import "./components/Carousel/Carousel.css";

function App() {
  const dataArr = [
    {
      name: "item 1",
    },
    {
      name: "item 2",
    },
    {
      name: "item 3",
    },
    {
      name: "item 4",
    },
    {
      name: "item 5",
    },
    {
      name: "item 6",
    },
    {
      name: "item 7",
    },
    {
      name: "item 8",
    },
    {
      name: "item 9",
    },
  ];

  return (
    <div className="App">
      <Carousel show={4} infiniteLoop withIndicator>
        {dataArr.map(({ name }) => (
          <div
            style={{
              backgroundColor: "pink",
              marginRight: "4px",
              width: "36.67%",
            }}
          >
            <h3>{name}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
