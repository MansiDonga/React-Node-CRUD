import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";

const initialState = { counter: 10, inputValue: "" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "inputText":
      return { ...state, inputValue: action.payload };
    default:
      throw new Error();
  }
}

function TestReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="test-reducer-wrapper">
      <h3 className="text-center">Increase/Decrease Count!</h3>
      <div className="mt-5 d-flex align-items-center justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increase
        </button>
        <span className="ms-5 me-5"> {state.counter} </span>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrease
        </button>
      </div>
      <div className="mt-5">
        <input
        className="justify-content-center"
          type="text"
          onChange={(e) => dispatch({ type: "inputText", payload: e.target.value })}
        />
        <div className="ms-5 me-5"> {state.inputValue} </div>
      </div>
    </div>
  );
}

export default TestReducer;
