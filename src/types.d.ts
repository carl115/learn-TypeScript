import { Visibility, Weather } from './enums'

//export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
/*
export enum Weather {
  Sunny = 'sunny', 
  rainy = 'rainy', 
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}
*/

//export type Visibility = 'great' | 'good' | 'ok' | 'poor'
/*
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}
*/

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type newDiaryEntry = Omit<DiaryEntry, 'id'>