import React from "react";

import * as V from "victory";

const Chart2: React.FC = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [value]);

  const data = React.useMemo(
    () => [
      { x: 1, y: value },
      { x: 2, y: 3 },
    ],
    [value]
  );

 

  return (
    <React.Fragment>
      <V.VictoryPie
        data={data}
        animate={{
          duration: 2000,
        }}
        colorScale={["cyan", "navy"]}
      />
    </React.Fragment>
  );
};

export default Chart2;
