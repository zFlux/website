import { Component, Input } from '@angular/core';
import { Daniel } from '../daniel.model';
import { SvgClockComponent } from '../svg-clock/svg-clock.component';


@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss']
})
export class ResumeHeaderComponent {
  @Input()
  daniel!: Daniel;

}
