import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <ColofulMessage color="blue">ああああ</ColofulMessage>
      <ColofulMessage color="pink">いいいいい</ColofulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>On/Off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

export default App;
