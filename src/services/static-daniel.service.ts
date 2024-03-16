import { Daniel } from '../models/daniel.model';
export const DANIEL: Daniel = {
  name: "Daniel Christo",
  resume: "https://1drv.ms/w/s!Ag1zPaHmU_oxmRyEBt8Vg6NY9K7I",
  email: "findme@danielchristo.com",
  currentDate: new Date(),
  links: [
    {link:'https://github.com/zFlux', image:'github-24x24.png', label: "Daniel Christo's Github Link", altText: "Github"},
    {link:'https://ca.linkedin.com/pub/daniel-christo/27/ab0/a54/', image:'linkedin-24x24.png', label: "Daniel Christo's Github Link", altText: "LinkedIn"}  ],

  races: [
    {date:'2019-10-20', race:'Toronto Waterfront Marathon', km:'42.2', time: '4:17:17'},
    {date:'2019-03-31', race:'Around the Bay Road Race', km:'30', time:'2:45:13'},
    {date:'2018-10-21', race:'Toronto Waterfront Marathon', km:'42.2', time:'4:26:26'},
    {date:'2016-06-25', race:'Perth Kilt Run', km:'21', time:'2:34:50.3'},
    {date:'2016-05-08', race:'Sporting Life 10k', km:'10', time:'0:49:30'},
    {date:'2016-04-03',	race:'Around the Bay Road Race', km:'30', time:'3:16:59'},
    {date:'2014-08-16',	race:'A Mid Summer Nights Run', km:'30', time:'2:56:42.2'},
    {date:'2013-10-20',	race:'Toronto Waterfront Marathon', km:'42.2', time:'4:50:02'},
    {date:'2014-05-11',	race:'Sporting Life 10k', km:'10', time:'0:51:16.7'},
    {date:'2013-09-11',	race:'Mount Robson Marathon', km:'42.2', time:'6:22:53.7'},
    {date:'2013-08-17',	race:'A Mid Summer Nights Run', km:'30', time:'3:03:59.1'},
    {date:'2013-04-21',	race:'Toronto Yonge Street 10k', km:'10', time:'0:49:34'},
    {date:'2013-05-12',	race:'Sporting Life 10k', km:'10', time:'0:48:24'},
    {date:'2012-10-14',	race:'Toronto Waterfront Marathon', km:'42.2', time:'4:36:39.0'},
    {date:'2012-08-18',	race:'A Mid Summer Nights Run', km:'30', time:'3:04:24.4'},
    {date:'2012-03-25',	race:'Around the Bay Road Race', km:'30', time:'3:18:01.1'},
    {date:'2011-10-01',	race:'Run for the Toad', km:'25', time:'3:18:44'},
    {date:'2011-09-24',	race:'ZooRun 10k', km:'10', time:'0:56:47.6'},
    {date:'2011-05-01',	race:'Sporting Life Toronto 10k', km:'10', time:'0:58:49.7'},
    {date:'2011-03-27',	race:'Around the Bay Road Races', km:'30', time:'3:24:06.5'},
    {date:'2010-09-26',	race:'Toronto Waterfront Marathon', km:'42.2', time:'5:05:22.3'},
    {date:'2010-08-21',	race:'A Mid Summer Nights Run', km:'30', time:'3:13:30.4'}
  ],

  totalRaces: 0,
  totalKm: 0,
  totalSeconds: 0,
  totalMinutes: 0,
  totalHours: 0,
  totalTimeRunningYears: 0,
  totalTimeRunningDays: 0,

  skills: [
    { skillTitle: 'Back End', skillDetails:
        [ {skillDetailTitle: 'Frameworks', skillDetailItems: ['Rails', 'Spring Framework', 'Node.js / Next.js'] },
          {skillDetailTitle: 'Languages', skillDetailItems: ['Java', 'Ruby', 'Typescript', 'SQL and PL, (Postgres, MySQL','Oracle, Microsoft)'] },
        ]
    },
    { skillTitle: 'Front End', skillDetails:
          [ 
            {skillDetailTitle: 'Frameworks', skillDetailItems: ['React / Angular'] },
            {skillDetailTitle: 'Languages', skillDetailItems: ['Typescript / Javascript', 'HTML / CSS / SCSS'] }
          ]
    }
  ],

  aboutMeParagraphs: [
  'I build software for humans. I love it, and I\'m good at it. ', 
  'I\'m experienced with web services and database development using ' + 
  'Java Spring, Ruby on Rails, Postgresql and Oracle PL/SQL. Most recently I\'ve been working ' +
  'with React and GraphQL. ',
  'findme@danielchristo.com to discuss your business needs and how I may be of help.']

}