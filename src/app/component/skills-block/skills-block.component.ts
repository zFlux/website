import { Component, Input} from '@angular/core';
import { Skill } from '../../model/skill';

@Component({
  selector: 'skills-block',
  template: `
  <h2 id="skillsheader">Software Developer</h2>
  <div class="panel-body">
    <div class="col-lg-6 greyfont" *ngFor="let skill of skills">
      <h3>{{skill.skillTitle}}</h3>
      <div *ngFor="let skillDetail of skill.skillDetails" >
        <h4>{{skillDetail.skillDetailTitle}}</h4>
         <ul>
          <li *ngFor="let item of skillDetail.skillDetailItems">{{item}}</li>
        </ul>
     </div>
    </div>
  </div>
  `
})
export class SkillsBlockComponent {
  @Input() skills: Skill[];

}
