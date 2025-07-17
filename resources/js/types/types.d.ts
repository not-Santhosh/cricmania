export interface Team {
    id: number;
    name: string;
    logo: string;
}
  
export interface Game {
    id: number;
    name: string | null;
    tournament_id: number | null;
    team_1_id: number;
    team_2_id: number;
    winning_team_id: number | null;
    victory_margin: number | null;
    created_at: string;
    updated_at: string;
    team_1: Team;
    team_2: Team;
    winning_team?: Team;
    venue: string;
    time: string
}
  