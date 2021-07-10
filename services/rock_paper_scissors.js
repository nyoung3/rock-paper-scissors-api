const express = require('express')

module.exports = {
    get_game_rng: (req, res) => {
      let rng = make_result();
        const result = {
          value: rng,
        }

        return res.status(200).json({result: result})
    }
}

const make_result = (extras = false) => {
  const rolls = {
    0: 'rock',
    1: 'paper',
    2: 'scissors',
  }
  if (extras) { 
    rolls.push({
      3: 'lizard',
      4: 'spock',
    })
  }

  let rng = Math.random() * (extras ? 4 : 2);
  rng = Math.round(rng);

  return rolls[rng];
}