import { Component, Input } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss']
})
export class SkillsBlockComponent {
  @Input()
  skills!: Skill[];

}
