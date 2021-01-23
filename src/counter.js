import React, { useState } from "react";

const UseStateCounter = () => {
  const [i, seti] = useState(0);
  const fun = (num) => {
    if (num === 0) seti(0);
    else seti(i + num);
  };
  const fun1 = (num) => {
    setTimeout(() => {
      if (num === 0)
        seti(() => {
          return 0;
        });
      else
        seti((p) => {
          return p + num;
        });
    }, 2000);
  };
  return (
    <div>
      <h2>useState counter example</h2>;
      <section>
        <h3>Counter</h3>
        <h2>{i}</h2>
        <button className="btn" onClick={() => fun(-1)}>
          decrease
        </button>
        <button className="btn" onClick={() => fun(0)}>
          reset
        </button>
        <button className="btn" onClick={() => fun(1)}>
          increase
        </button>
        <h3>Counter Cpx</h3>
        <h2>{i}</h2>
        <button className="btn" onClick={() => fun1(-1)}>
          decrease
        </button>
        <button className="btn" onClick={() => fun1(0)}>
          reset
        </button>
        <button className="btn" onClick={() => fun1(1)}>
          increase
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
