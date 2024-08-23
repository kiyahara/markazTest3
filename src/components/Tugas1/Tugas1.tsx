"use client";

// import Image from "next/image";
// import "./style.css";
import React, { FormEvent, useEffect, useState } from "react";

interface DiceWithPlayer {
  id: number;
  diceNumber: number[];
}

export default function Tugas1Component() {
  const [originalValue, setOriginalValue] = useState<DiceWithPlayer[][]>([]);
  const [evaluationValue, setEvaluationValue] = useState<DiceWithPlayer[][]>(
    []
  );

  const [score, setScore] = useState<number[]>([]);
  const [winnerPlayer, setWinnerPlayer] = useState(0);

  const [formData, setFormData] = useState({
    player: 0,
    dice: 0,
  });

  function countDataDice(playerData: number, diceData: number) {
    const player: number = playerData;
    const dice: number = diceData;

    let playerScore: number[] = [];
    let playerDice: DiceWithPlayer[] = [];
    let addDice: number[] = [];

    let randomArray: number[] = [];
    let removeDice: number[] = [];
    let evaluationData: DiceWithPlayer[][] = [];
    let playerDataWithDice: DiceWithPlayer[][] = [];

    for (let x = 0; x < player; x++) {
      playerScore.push(0);
      for (let y = 0; y < dice; y++) {
        randomArray.push(Math.floor(Math.random() * (6 - 1 + 1) + 1));
      }
      const data: DiceWithPlayer = {
        id: x,
        diceNumber: randomArray,
      };
      playerDice.push(data);
      randomArray = [];
    }
    playerDataWithDice.push(JSON.parse(JSON.stringify(playerDice)));
    let secondPhase: boolean = false;
    while (playerDice.length > 1) {
      if (secondPhase == true) {
        for (let x = 0; x < playerDice.length; x++) {
          for (let y = 0; y < playerDice[x].diceNumber.length; y++) {
            randomArray.push(Math.floor(Math.random() * (6 - 1 + 1) + 1));
          }
          playerDice[x].diceNumber = randomArray;
          randomArray = [];
        }
      }
      playerDataWithDice.push(JSON.parse(JSON.stringify(playerDice)));
      secondPhase = true;
      for (let x = 0; x < playerDice.length; x++) {
        for (let y = 0; y < playerDice[x].diceNumber.length; y++) {
          if (playerDice[x].diceNumber[y] == 6) {
            playerScore[playerDice[x].id] += 1;
          }
        }
      }

      for (let x = 0; x < playerDice.length; x++) {
        for (let y = playerDice[x].diceNumber.length - 1; y >= 0; y--) {
          if (playerDice[x].diceNumber[y] == 6) {
            playerDice[x].diceNumber.splice(y, 1);
          }
        }
      }

      for (let x = 0; x < playerDice.length; x++) {
        for (let y = 0; y < playerDice[x].diceNumber.length; y++) {
          if (playerDice[x].diceNumber[y] == 1) {
            addDice.push(playerDice[x].id);
          }
        }
      }

      for (let y = addDice.length - 1; y >= 0; y--) {
        for (let x = 0; x < playerDice.length; x++) {
          if (playerDice[x].id == addDice[y]) {
            if (x + 1 == playerDice.length) {
              let index = playerDice[x].diceNumber.indexOf(1);
              if (index !== -1) {
                playerDice[x].diceNumber.splice(index, 1);
              }
              playerDice[0].diceNumber.push(1);
            } else {
              let index = playerDice[x].diceNumber.indexOf(1);
              if (index !== -1) {
                playerDice[x].diceNumber.splice(index, 1);
              }
              playerDice[x + 1].diceNumber.push(1);
            }
          }
        }
      }
      evaluationData.push(JSON.parse(JSON.stringify(playerDice)));
      removeDice = [];
      addDice = [];
      for (let x = 0; x < playerDice.length; x++) {
        if (playerDice[x].diceNumber.length == 0) {
          removeDice.push(playerDice[x].id);
        }
      }

      for (let x = 0; x < removeDice.length; x++) {
        playerDice.splice(removeDice[x], 1);
      }
    }
    setOriginalValue(playerDataWithDice);
    setEvaluationValue(evaluationData);
    let winner = playerScore.indexOf(Math.max(...playerScore));
    setScore(playerScore);
    setWinnerPlayer(winner);
  }
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    countDataDice(formData.player, formData.dice);
  }

  return (
    <>
      <div className="containerMain">
        <form onSubmit={onSubmit}>
          <a href="/">Back</a>
          <p>Tugas 1</p>
          <p>Logic Menghitung Data</p>
          <div className="InputData">
            <span>Jumlah Player</span>
            <input
              type="number"
              name="player"
              value={formData.player}
              onChange={handleChange}
            />
            <span>Jumlah Dice</span>
            <input
              type="number"
              name="dice"
              value={formData.dice}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {evaluationValue.length != 0 ? (
          <>
            {score?.map((scoreData: number, i: number) => (
              <React.Fragment key={i}>
                <p>
                  Player ke - {i + 1} : {scoreData}
                </p>
              </React.Fragment>
            ))}
            <p>Pemenang Permainan Dadu Pemain ke - {winnerPlayer + 1}</p>

            <br />
            {evaluationValue?.map((listPlayer: DiceWithPlayer[], i: number) => (
              <React.Fragment key={i}>
                <p>Ini Giliran ke - {i + 1} :</p>
                {listPlayer.map((listData: DiceWithPlayer, k: number) => (
                  <React.Fragment key={k}>
                    <p>
                      Dadu Player ke - {k + 1} Sebelum Evaluasi:{" "}
                      {originalValue[i][k].diceNumber.join(", ")}
                    </p>
                    <p>
                      Player ke - {k + 1} Setelah Evaluasi:{" "}
                      {listData.diceNumber.join(", ")}
                    </p>
                    <br />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
