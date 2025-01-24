import { writable } from "svelte/store";
import type { GameState } from "$lib/components/game/types";
import { GAME_SETTINGS } from "$lib/components/game/types";

const initialState: GameState = {
	score: 0,
	timeLeft: GAME_SETTINGS.DURATION,
	highScore: 0
};

export const gameState = writable<GameState>(initialState);
