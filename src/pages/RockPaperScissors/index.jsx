import React, { useState } from "react";
import "./index.scss";
import { FaHandPaper, FaHandPeace, FaHandRock } from "react-icons/fa";

const RockPaperScissors = () => {
  const [yourPoint, setYourPoint] = useState(0);
  const [pcPoint, setPcPoint] = useState(0);
  const [compChoiceValue, setCompChoiceValue] = useState("");
  const [yourChoiceValue, setYourChoiceValue] = useState("");

  const [message, setMessage] = useState("Click!");

  function rockSelected() {
    console.log("rock clicked");
    setYourChoiceValue("ROCK");
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let value = choices[Math.floor(Math.random() * 3)];
    setCompChoiceValue(value);

    switch (value) {
      case "PAPER":
        setPcPoint(pcPoint + 1);
        setMessage("YOU LOSE");

        break;
      case "SCISSORS":
        setYourPoint(yourPoint + 1);
        setMessage("YOU WIN");

        break;
      case "ROCK":
        setMessage("IT`S A TIE");

        break;
      default:
        break;
    }
  }
  function paperSelected() {
    console.log("paper clicked");
    setYourChoiceValue("PAPER");
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let value = choices[Math.floor(Math.random() * 3)];
    setCompChoiceValue(value);

    switch (value) {
      case "PAPER":
        setMessage("IT`S A TIE");
        break;
      case "SCISSORS":
        setPcPoint(pcPoint + 1);
        setMessage("YOU LOSE");
        break;
      case "ROCK":
        setYourPoint(yourPoint + 1);
        setMessage("YOU WIN");
        break;
      default:
        break;
    }
  }
  function scissorsSelected() {
    console.log("scissors clicked");
    setYourChoiceValue("SCISSORS");
    let choices = ["ROCK", "PAPER", "SCISSORS"];

    let value = choices[Math.floor(Math.random() * 3)];
    setCompChoiceValue(value);

    switch (value) {
      case "PAPER":
        setYourPoint(yourPoint + 1);

        setMessage("YOU WIN");
        break;
      case "SCISSORS":
        setMessage("IT`S A TIE");

        break;
      case "ROCK":
        setPcPoint(pcPoint + 1);
        setMessage("YOU LOSE");

        break;
      default:
        break;
    }
  }
  return (
    <>
      <section className="rockpaperscissors">
        <div className="container">
          <div className="game_score">
            <p>
              <span className="user_nick">You</span>:
              <strong className="yourPoint">{yourPoint}</strong>
            </p>
            <p>
              Computer: <strong className="compPoint">{pcPoint}</strong>
            </p>
          </div>
          <div className="buttons">
            <button className="rockBtn" onClick={() => rockSelected()}>
              <FaHandRock />
            </button>
            <button className="paperBtn" onClick={() => paperSelected()}>
              <FaHandPaper />
            </button>
            <button className="scissorsBtn" onClick={() => scissorsSelected()}>
              <FaHandPeace />
            </button>
          </div>
          <div className="choices">
            {yourChoiceValue ? (
              <p>
                Your choose:
                <strong className="yourChoice">{yourChoiceValue}</strong>
              </p>
            ) : (
              ""
            )}
            {compChoiceValue ? (
              <p>
                Computer choose:
                <strong className="compChoice">{compChoiceValue}</strong>
              </p>
            ) : (
              ""
            )}
          </div>
          <h1 className="click_text">{message}</h1>
        </div>
      </section>
    </>
  );
};

export default RockPaperScissors;
