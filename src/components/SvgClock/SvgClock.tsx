import React, { FC, useEffect, useState } from 'react';
import './SvgClock.scss';

interface SvgClockProps {
  clockWidth: number;
  clockHeight: number;
}

const SvgClock: FC<SvgClockProps> = (props) => {

  const [circlePath, setCirclePath] = useState('');
  const [circleTransform, setCircleTransform] = useState('');
  const [secondHand, setSecondHand] = useState('');
  const [minuteHand, setMinuteHand] = useState('');
  const [hourHand, setHourHand] = useState('');


  useEffect(() => {
    const ClockCentreX = props.clockWidth / 2;
    const ClockCentreY = props.clockHeight / 2;
    const ClockRadius = 85;
    const SecondHandRadius = ClockRadius - 5;
    const MinuteHandRadius = ClockRadius - 10;
    const HourHandRadius = ClockRadius - 15;

    makeClock(ClockCentreX, ClockCentreY, ClockRadius);
    clockTick(ClockCentreX, ClockCentreY, SecondHandRadius, MinuteHandRadius, HourHandRadius);
    const intervalId = setInterval(() => clockTick(ClockCentreX, ClockCentreY, SecondHandRadius, MinuteHandRadius, HourHandRadius), 1000);

    return () => clearInterval(intervalId);
  }, [props.clockWidth, props.clockHeight]);

  const makeClock = (cx: number, cy: number, cr: number) => {
    setCirclePath(`M 0,-1 C 0.5523, -1 1, -0.5523 1, 0 C 1, 0.5523 0.5523, 1 0,1 C -0.5523, 1 -1, 0.5523 -1,0 C -1, -0.5523 -0.5523, -1 0,-1`);
    setCircleTransform(`translate(${cx},${cy}) scale(${cr},${cr})`);
  };

  const clockTick = (cx: number, cy: number, sr: number, mr: number, hr: number) => {
    const clock_time = new Date();
    let clock_seconds = clock_time.getSeconds();
    let clock_minutes = clock_time.getMinutes();
    let clock_hours = clock_time.getHours();

    if (clock_hours > 12) {
      clock_hours -= 12;
    }

    const secondX = cx + sr * Math.cos( (clock_seconds * 2 * Math.PI/60)- Math.PI/2);
  	const secondY = cy + sr * Math.sin( (clock_seconds * 2 * Math.PI/60)- Math.PI/2);

    const minuteX = cx + mr * Math.cos( (clock_minutes * 2 * Math.PI/60)- Math.PI/2 );
  	const minuteY = cy + mr * Math.sin( (clock_minutes * 2 * Math.PI/60)- Math.PI/2 );

  	const hourX = cx + hr * Math.cos( (clock_hours * 2 * Math.PI/12)- Math.PI/2 );
  	const hourY = cy + hr * Math.sin( (clock_hours * 2 * Math.PI/12)- Math.PI/2 );

  	setSecondHand("M" + cx + "," + cy + " L" + secondX + "," + secondY);
  	setMinuteHand("M" + cx + "," + cy + " L" + minuteX + "," + minuteY);
  	setHourHand("M" + cx + "," + cy + " L" + hourX + "," + hourY);
  };

  return (
    <svg id="svgclock">
      <defs>
        <path id='clkCircle' d={circlePath} transform={circleTransform}></path>
        <path id="minute" d={minuteHand}></path>
        <path id="hour" d={hourHand}></path>
        <path id="second" d={secondHand}></path>
      </defs>
      <text id="clock-circle" >
        <textPath xlinkHref="#clkCircle">
          The Time Is Now.
          The Time Is Now.
          The Time Is Now.
        </textPath>
      </text>
      <text id="minute-hand">
        <textPath xlinkHref="#minute">
          TheTimeIsNow
        </textPath>
      </text>
      <text id="hour-hand">
        <textPath xlinkHref="#hour">
          NowNow
        </textPath>
      </text>
      <text id="second-hand">
        <textPath xlinkHref="#second">
          TheTimeIsRightNow
        </textPath>
      </text>
    </svg>
  );
};

export default SvgClock;
