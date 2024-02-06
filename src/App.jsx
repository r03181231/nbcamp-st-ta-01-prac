import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { minusN, plusN, totalN } from "./redux/modules/calculator";

function App() {
  const dispatch = useDispatch();
  const totalNum = useSelector((store) => store.calculator.totalNumber);

  const [number, setNumber] = useState(0);
  const onInputChange = (e) => {
    const { value } = e.target;

    setNumber(+value);
  };

  const onClickPlus = (number) => {
    dispatch(plusN(number));
    dispatch(totalN(number));
  };
  const onClickMinus = (number) => {
    dispatch(minusN(number));
    dispatch(totalN(number));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input onChange={onInputChange} /> 만큼을{" "}
        <button onClick={() => onClickPlus(number)}>더할게요</button>{" "}
        <button onClick={() => onClickMinus(number)}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{totalNum}</p>
      </div>
    </div>
  );
}

export default App;
