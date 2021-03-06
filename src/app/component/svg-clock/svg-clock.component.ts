import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-clock',
  template: `
  <svg  #svgclock id="svgclock" [style.width]="clockCssWidth" [style.height]="clockCssHeight">
    <defs>
      <path id='clkCircle' [attr.d]="circlePath" [attr.transform]="circleTransform"></path>
      <path id="minute" [attr.d]="minuteHand"></path>
      <path id="hour" [attr.d]="hourHand"></path>
      <path id="second" [attr.d]="secondHand"></path>
    </defs>
    <text font-size="24" >
      <textPath xlink:href="#clkCircle">
        The Time Is Now.
        The Time Is Now.
        The Time Is Now.
      </textPath>
    </text>
    <text font-size="10">
      <textPath xlink:href="#minute">
        TheTimeIsNow
      </textPath>
    </text>
    <text font-size="10">
      <textPath xlink:href="#hour">
        NowNow
      </textPath>
    </text>
    <text font-size="9">
      <textPath xlink:href="#second">
        TheTimeIsRightNow
      </textPath>
    </text>
  </svg>
  `
  ,
    styles: [`
    #svgclock {
      position: absolute;
      font-family: "Times New Roman", Times, serif;
      right: 0;
      top: 0;
    }
    `]
})
export class SvgClockComponent {

  circlePath: string;
  circleTransform: string;
  secondHand: string;
  minuteHand: string;
  hourHand: string;

  clockWidth: number = 257;
  clockHeight: number = 257;
  clockCssWidth: string;
  clockCssHeight: string;

  ngOnInit() {

    this.clockCssWidth = this.clockWidth + "px";
    this.clockCssHeight = this.clockHeight + "px";

    var ClockCentreX = this.clockWidth / 2;
    var ClockCentreY = this.clockHeight / 2;
    var ClockRadius = 85;
    var SecondHandRadius = ClockRadius - 5;
    var MinuteHandRadius = ClockRadius - 10;
    var HourHandRadius = ClockRadius - 15;

    this.makeClock(ClockCentreX, ClockCentreY, ClockRadius);
    this.clockTick(ClockCentreX, ClockCentreY, SecondHandRadius, MinuteHandRadius, HourHandRadius);
    setInterval(() => { this.clockTick(ClockCentreX, ClockCentreY, SecondHandRadius, MinuteHandRadius, HourHandRadius); }, 1000);
  }

  makeClock(cx: number, cy: number, cr: number) {
    this.circlePath = "M 0,-1 C 0.5523, -1 1, -0.5523 1, 0 C 1, 0.5523 0.5523, 1 0,1 C -0.5523, 1 -1, 0.5523 -1,0 C -1, -0.5523 -0.5523, -1 0,-1";
    this.circleTransform = "translate(" + cx + "," + cy + ") scale(" + cr + "," + cr + ")";
  }

  clockTick(cx: number, cy: number, sr: number, mr: number, hr: number) {

  	var clock_time = new Date();
  	var clock_seconds = clock_time.getSeconds();
  	var clock_minutes = clock_time.getMinutes();
  	var clock_hours = clock_time.getHours();

  	if (clock_hours > 12) { clock_hours-=12; }

  	var secondX = cx + sr * Math.cos( (clock_seconds * 2 * Math.PI/60)- Math.PI/2);
  	var secondY = cy + sr * Math.sin( (clock_seconds * 2 * Math.PI/60)- Math.PI/2);

  	var minuteX = cx + mr * Math.cos( (clock_minutes * 2 * Math.PI/60)- Math.PI/2 );
  	var minuteY = cy + mr * Math.sin( (clock_minutes * 2 * Math.PI/60)- Math.PI/2 );

  	var hourX = cx + hr * Math.cos( (clock_hours * 2 * Math.PI/12)- Math.PI/2 );
  	var hourY = cy + hr * Math.sin( (clock_hours * 2 * Math.PI/12)- Math.PI/2 );

  	this.secondHand = "M" + cx + "," + cy + " L" + secondX + "," + secondY;
  	this.minuteHand ="M" + cx + "," + cy + " L" + minuteX + "," + minuteY;
  	this.hourHand = "M" + cx + "," + cy + " L" + hourX + "," + hourY;
  }

}
