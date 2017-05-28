import { Link } from './link';
import { Race } from './race';
import { Skill } from './skill';

export class Daniel {
  name: string;
  email: string;
  currentDate: Date;
  links: Link[];
  races: Race[];
  totalRaces: number;
  totalKm: number;
  totalSeconds: number;
  totalMinutes: number;
  totalHours: number;
  totalTimeRunningYears: number;
  totalTimeRunningDays: number;
  skills: Skill[];
  aboutMeParagraphs: string[];
}
