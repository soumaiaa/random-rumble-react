import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { id: 1, name: "SANA", pv: 100, pvMax: 100, mana: 50, manaMax: 100 },
    { id: 2, name: "SOUZI", pv: 100, pvMax: 100, mana: 50, manaMax: 100 },
    { id: 3, name: "RAMI", pv: 100, pvMax: 100, mana: 50, manaMax: 100 },
    { id: 4, name: "JOURI", pv: 100, pvMax: 100, mana: 50, manaMax: 100 }
  ],
  monster: { pv: 800, pvMax: 800 },
  currentTurn: 0
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster.pv -= action.payload.strength;
    },
    hitBack: (state, action) => {
      const playerId = action.payload.playerId;
      const player = state.players.find((player) => player.id === playerId);
      if (player && player.pv > 0) {
        player.pv -= 5;
      }
    },
    increaseHealth: (state, action) => {
      const { playerId, amount } = action.payload;
      const player = state.players.find((player) => player.id === playerId);
      if (player) {
        player.pv += amount;
        if (player.pv > player.pvMax) {
          player.pv = player.pvMax;
        }
      }
    },
    increaseMana: (state, action) => {
      const { playerId, amount } = action.payload;
      const player = state.players.find((player) => player.id === playerId);
      if (player) {
        player.mana += amount;
        if (player.mana > player.manaMax) {
          player.mana = player.manaMax;
        }
      }
    },
    decreaseMana: (state, action) => {
      const { playerId, amount } = action.payload;
      const player = state.players.find((player) => player.id === playerId);
      if (player) {
        player.mana -= amount;
        if (player.mana < 0) {
          player.mana = 0;
        }
      }
    },
    nextTurn: (state) => {
      state.currentTurn += 1;
    }
  }
});

export const { hitMonster, hitBack, increaseHealth, increaseMana, decreaseMana, nextTurn } = fightSlice.actions;

export default fightSlice.reducer;
