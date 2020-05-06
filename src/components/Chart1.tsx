import React from "react";

import * as V from "victory";

import ChangeValue from "./ChangeValue";

const Chart1: React.FC = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [value]);

  const data = React.useMemo(
    () => [
      { x: value, y: 2, y0: 0 },
      { x: 2, y: 3, y0: 1 },
      { x: 3, y: 5, y0: 1 },
      { x: 4, y: 4, y0: 2 },
      { x: 5, y: 6, y0: 2 },
    ],
    [value]
  );

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <React.Fragment>
      <V.VictoryChart>
        <V.VictoryArea
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          groupComponent={
            <V.VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
          }
          style={{
            data: {
              stroke: "#c43a20",
              strokeWidth: 15,
              strokeLinecap: "round",
            },
          }}
          data={data}
        />
      </V.VictoryChart>
      <h1> {value}</h1>
      <ChangeValue decrementClick={decrement} incrementClick={increment}>
        {" "}
      </ChangeValue>
    </React.Fragment>
  );
};

export default Chart1;
