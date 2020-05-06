import React from "react";

import * as V from "victory";

const Chart3: React.FC = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [value]);

  const data = React.useMemo(
    () => [
      { x: value, y: 2, amount: 30 },
      { x: 2, y: 3, amount: 40 },
      { x: 3, y: 5, amount: 25 + value },
      { x: 4, y: 4, amount: 10 },
      { x: 5, y: 7, amount: 45 },
    ],
    [value]
  );


  return (
    <React.Fragment>
      <V.VictoryScatter
        style={{ data: { fill: "#c43a31" } }}
        bubbleProperty="amount"
        maxBubbleSize={25}
        data={data}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
      />
    </React.Fragment>
  );
};

export default Chart3;
