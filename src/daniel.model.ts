import { Link } from './link.model';
import { Race } from './race.model';
import { Skill } from './skill.model';

export class Daniel {
    name!: string;
    email!: string;
    currentDate!: Date;
    links!: Link[];
    races!: Race[];
    totalRaces!: number;
    totalKm!: number;
    totalSeconds!: number;
    totalMinutes!: number;
    totalHours!: number;
    totalTimeRunningYears!: number;
    totalTimeRunningDays!: number;
    skills!: Skill[];
    aboutMeParagraphs!: string[];
}
