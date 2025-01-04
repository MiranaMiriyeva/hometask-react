import React, { useState } from "react";
import "./index.scss";

const Tasks = () => {
  const [inp, setInp] = useState(null);
  const [plusTasks, setplusTasks] = useState([]);
  const [multiplyTasks, setMultiplyTasks] = useState([]);

  let plusArr = [];
  let multiplyArr = [];

  function plusNums(e) {
    e.preventDefault();
    for (let i = 0; i < inp; i++) {
      let value =
        Math.floor(Math.random() * 10) + "+" + Math.floor(Math.random() * 10);
      plusArr.push(value);
    }
    setplusTasks(plusArr);
    setMultiplyTasks([]);
  }
  function multiplyNums(e) {
    e.preventDefault();
    for (let i = 0; i < inp; i++) {
      let value =
        Math.floor(Math.random() * 10) + "*" + Math.floor(Math.random() * 10);
      multiplyArr.push(value);
    }
    setMultiplyTasks(multiplyArr);
    setplusTasks([]);
  }

  return (
    <section id="task-section">
      <form>
        <input
          type="text"
          placeholder="Task Count"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <div className="math-buttons">
          <button onClick={(e) => plusNums(e)}>+</button>
          <button onClick={(e) => multiplyNums(e)}>*</button>
        </div>
      </form>
      <div className="new-tasks">
        {plusTasks || multiplyTasks ? <h2>Tasks</h2> : ""}

        <ul>
          {plusTasks.map((x, i) => {
            return <li key={i}>{x}=?</li>;
          })}
          {multiplyTasks.map((x, i) => {
            return <li key={i}>{x}=?</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Tasks;
