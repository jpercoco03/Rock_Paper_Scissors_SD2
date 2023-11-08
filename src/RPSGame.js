import React, { Component } from "react";

class RPSGame extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: null,
      computerChoice: null,
      result: ""
    };
  }

  choices = ["rock", "paper", "scissors"];

  determineWinner = (userChoice, computerChoice) => {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You Win";
    } else if (userChoice === computerChoice) {
      return "It's a tie";
    } else {
      return "You Lose";
    }
  };

  handleChoice = (choice) => {
    const userChoice = choice;
    const computerChoice = this.choices[Math.floor(Math.random() * 3)];
    const result = this.determineWinner(userChoice, computerChoice);

    this.setState({ userChoice, computerChoice, result });
  };

  render() {
    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <p>Click on an image to play</p>
        <div>
          <button onClick={() => this.handleChoice("rock")}>
  <img
    src="https://image.pngaaa.com/44/901044-middle.png"
    alt="Rock"
    style={{ width: "100px" }}
  />
</button>

          <button onClick={() => this.handleChoice("paper")}>
  <img
    src="http://clipart-library.com/images/5TRKqbRqc.png"
    alt="Paper"
    style={{ width: "100px" }} 
  />
</button>
          <button onClick={() => this.handleChoice("scissors")}>
  <img
    src="http://www.clipartbest.com/cliparts/aiq/LBB/aiqLBBLAT.png"
    alt="Scissors"
    style={{ width: "100px" }}
  />
</button>

        </div>
        <div>
          {this.state.userChoice && <p>You chose: {this.state.userChoice}</p>}
          {this.state.computerChoice && (
            <p>Your opponent chose: {this.state.computerChoice}</p>
          )}
          {this.state.result && <p>Result: {this.state.result}</p>}
        </div>
      </div>
    );
  }
}

export default RPSGame;
