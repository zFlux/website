angular.module('homePageApp', [])
  .controller('homePageController', function() {
    this.name = "Daniel Christo";

    this.email = "findme@danielchristo.com";
    this.currentDate = new Date();

    this.links = [
      {link:'https://github.com/zFlux', image:'github-24x24.png'},
      {link:'https://twitter.com/good_eipi', image:'twitter-24x24.png'},
      {link:'https://ca.linkedin.com/pub/daniel-christo/27/ab0/a54/', image:'linkedin-24x24.png'},
      {link:'https://www.facebook.com/daniel.christo.5', image:'facebook-24x24.png'}
    ];

    this.races = [
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
      {date:'2010-09-26',	race:'Toronto Waterfront Marathon', km:'42.2', time:'	5:05:22.3'},
      {date:'2010-08-21',	race:'A Mid Summer Nights Run', km:'30', time:'3:13:30.4'}
    ];

    //start race totals
    this.totalRaces = this.races.length;
    var totalKm = 0;
    var totalTime = 0;
    for (var i = 0; i < this.races.length; i++) {
      totalKm = totalKm + parseFloat(this.races[i].km);
      var timeParts = this.races[i].time.split(':');
      totalTime = totalTime + (parseFloat(timeParts[0]) * 60 * 60) + parseFloat(timeParts[1]) * 60 + parseFloat(timeParts[2]);
    }
    this.totalKm = totalKm.toFixed(1);
    this.totalSeconds = Math.round(totalTime % 60);
    this.totalMinutes = Math.round((totalTime % (60 * 60)) / 60);
    this.totalHours = Math.floor(totalTime / (60 * 60));
    var firstDate = new Date(this.races[0].date);
    var lastDate = new Date(this.races[this.races.length-1].date);
    this.totalTimeRunningYears = Math.floor((firstDate - lastDate) / (60 * 60 * 24 * 1000 * 365.25));
    this.totalTimeRunningDays = Math.round(((firstDate - lastDate) / (60 * 60 * 24 * 1000)) % 365.25);
    // end race totals

    this.skills = [
      { headingTitle: 'Database Programmer', subHeadings:
            [ {subHeadingTitle: 'PL/SQL', subHeadingItems: ['Oracle PL/SQL, Microsoft T-SQL', 'PostgreSQL PL/pgSQL, DB2, MySQL'] },
              {subHeadingTitle: 'Data Warehousing', subHeadingItems: ['Microsoft SSIS & Talend'] },
              {subHeadingTitle: 'Reporting', subHeadingItems: ['Microsoft SSRS, Crystal Reports XI & Cognos'] }
           ]
      },
      { headingTitle: 'Web Developer', subHeadings:
            [ {subHeadingTitle: 'RESTful Web Services', subHeadingItems: ['Java Spring Framework', 'Sails.js, Node.js, RAML'] },
              {subHeadingTitle: 'Front-end Development', subHeadingItems: ['Angular, JQuery', 'HTML & CSS'] },
              {subHeadingTitle: 'Web Development', subHeadingItems: ['PHP, Python & Perl'] }
           ]
      }
    ];

    this.aboutMeParagraphs = ['Utilizing software engineering best practices, I have worked with retail and financial ' +
    'industry partners to develop or repair business critical database and web service solutions. For Canadian ' +
    'Tire and Loblaws, I built real-time supply chain management reports that streamlined the day-to-day movement '+
    'of automotive and grocery product across their businesses. For H&R Block and The Jonah Group, I provided data'+
    ' warehouse solutions to monitor sales and financial profitability. Currently, I am working with my team at Jonah '+
    'Group to replace the Ontario Teacher’s Pension Plan’s existing web-based system for teachers to monitor their benefits'+
    ' accrual to date.',

    'I am most motivated when faced with a challenging real-world problem that requires software programming '+
    'to solve.  I work quickly and effectively to understand the technical needs of the business so that I can provide the right '+
    'solutions for them to achieve success.',

    'Findme@danielchristo.com to discuss your business needs and how I may be of help.'];


  });