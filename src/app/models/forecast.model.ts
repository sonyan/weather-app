export enum Condition {
  Sunny,
  Cloudy,
  Snow
}

export interface IForecast {
  date: Date;
  high: number;
  low: number;
  condition: Condition;
}
