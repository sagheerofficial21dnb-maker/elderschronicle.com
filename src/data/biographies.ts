import { Biography } from '../types';

export const BIOGRAPHIES: Biography[] = [];

export const CATEGORIES = [
  'World Leaders',
  'Scientists & Inventors',
  'Literary Legends',
  'Philosophers'
] as const;

export const HISTORICAL_ERAS = [
  'All Eras',
  'Classical Antiquity',
  'Renaissance',
  '19th Century',
  '20th Century'
] as const;
