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

export interface Tournament {
    id: number;
    name: string;
    country_id: number;
    state_id: number;
    city_id: number;
    start_date: string;
    end_date: string;
    status: string;
    description: string;
    user_id: number;
    prize_money: number;
    entry_fee: number;
    registration_deadline: string;
    contact_number: string;
    contact_email: string;
    website: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    logo: string;
    banner: string;
    created_at: string;
    updated_at: string;
}

export interface Team {
    id: number;
    team_id: number;
    name: string;
    country_id?: number;
    state_id?: number;
    city_id?: number;
    is_banned: boolean;
    created_at: string;
    updated_at: string;
}