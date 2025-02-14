export type City = {
  name: string;
  country:string;
  temp_c: number;
  wind_kph: number;
  humidity: number;
  precipitation?: number;
  wind_degree:number
  cloud?: number;
  condition?: {
    code: number;
    icon: string;
    text: string;
  };
  dewpoint_c?: number;
  dewpoint_f?: number;
  feelslike_c?: number;
  feelslike_f?: number;
  gust_kph?: number;
  gust_mph?: number;
  heatindex_c?: number;
  heatindex_f?: number;
  is_day?: number;
  last_updated?: string;
  last_updated_epoch?: number;
  precip_in?: number;
  pressure_in?: number;
  pressure_mb?: number;
  temp_f?: number;
  uv?: number;
  vis_km?: number;
  vis_miles?: number;

};
