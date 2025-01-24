export interface TargetPosition {
	x: number;
	y: number;
}

export interface GameState {
	score: number;
	timeLeft: number;
	highScore: number;
}

export const GAME_SETTINGS = {
	DURATION: 30,
	TARGET_SIZE: 80,
	SPAWN_DELAY: 500,
	SCREEN_MARGIN: 20
} as const;

export type ButtonType = "button" | "submit" | "reset";
