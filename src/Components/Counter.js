import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/CounterAction";
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.reducerAction);

  return (

    <>
      <div className="container text-center p-5">
        <h3>{counter}</h3>

        <div>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment{" "}
          </button>
        </div>

        <div>
          {" "}

          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement{" "}
          </button>
        </div>

      </div>
    </>
  );
}

export default Counter;
