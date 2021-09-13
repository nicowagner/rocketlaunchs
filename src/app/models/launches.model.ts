export interface Launches {
  flight_number: number;
  mission_name: string;
  launch_date_unix: number;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    active: boolean;
    cost_per_launch: number;
    company: string;
  };
  favorite: boolean;
}
