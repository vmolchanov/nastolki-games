export declare enum ERole {
  RED_CAPTAIN = "RED_CAPTAIN",
  BLUE_CAPTAIN = "BLUE_CAPTAIN",
  RED_AGENT = "RED_AGENT",
  BLUE_AGENT = "BLUE_AGENT"
}

export interface ICodenamesState {
  currentPlayer: any;
  currentState: any;
  move: ERole;
}
