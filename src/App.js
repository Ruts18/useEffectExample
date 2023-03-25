import React, { useEffect, useState } from "react";

const App = () => {
  const [Num, setNum] = useState(0);
  useEffect(() => {
    alert("I Am Clicked");
  }, [Num]);
  return (
    <button
      onClick={() => {
        setNum(Num + 1);
      }}
    >
      Click me {Num}
    </button>
  );
};
export default App;
