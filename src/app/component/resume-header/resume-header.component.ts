import { Component, Input} from '@angular/core';
import { Daniel } from '../../model/daniel';
import { SvgClockComponent } from '../svg-clock/svg-clock.component';


@Component({
  selector: 'resume-header',
  template: `

    <div #blah id="jumbo" class="jumbotron container-fluid">
      <div *ngIf="daniel" >
        <h1>{{daniel.name | uppercase}}</h1>
        <h4><a id="email" href="mailto:{{daniel.email}}" target="_top">{{daniel.email}}</a></h4>
        <a *ngFor="let link of daniel.links" href="{{link.link}}"><img src="assets/img/icons/{{link.image}}"></a>
        <span class="hidden-xs">
          <svg-clock></svg-clock>
        </span>
      </div>
    </div>
  `
})
export class ResumeHeaderComponent {
  @Input() daniel: Daniel;

}
