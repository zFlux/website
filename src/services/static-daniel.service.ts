import { Daniel } from '../models/daniel.model';
export const DANIEL: Daniel = {
  name: "Daniel Christo",
  resume: "/assets/Daniel_Christo_CV.pdf",
  email: "findme@danielchristo.com",
  currentDate: new Date(),
  links: [
    {link:'https://github.com/zFlux', image:'github.svg', label: "Daniel Christo's Github Link", altText: "Github"},
    {link:'https://ca.linkedin.com/pub/daniel-christo/27/ab0/a54/', image:'linkedin.svg', label: "Daniel Christo's LinkedIn Link", altText: "LinkedIn"}  ],

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
  'Utilizing software engineering best practices, I have worked with retail, ' +
  'financial and ed-tech industry partners to develop business critical web ' +
  'service and database solutions.', 
  
  'For Canadian Tire and Loblaws, I built real-time' +
  ' supply chain management reports that streamlined the day-to-day movement of ' +
  'automotive, grocery and apparel products across their businesses.', 

  ' For the Ontario Teacher’s Pension Plan, I replaced their existing web-based system for teachers to ' +
  'monitor and manage their pension.', 
  
  'For Thinkific I built the Thinkific App Store along with a first party App allowing B2B ' +
  'partners to log in with their own identity provider. I built functionality for Thinkific to collect' + 
  ' VAT taxes from their UK and EU customers as well as allow them to pay for services in their ' + 
  'local currencies. Most recently I built a new home page dashboard ' +
  'for Thinkific customers along with a customizable onboarding checklist. ',

  'I am most motivated when faced with a challenging customer-focused problem that requires ' +
  'software programming to solve.  I work quickly and effectively to understand the technical ' + 
  'needs of the business so that I can provide the right solutions for them to achieve success.',

  'findme@danielchristo.com to discuss your business needs and how I may be of help.']

}
