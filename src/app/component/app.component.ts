import { Component, OnInit } from '@angular/core';
import { Daniel } from '../model/daniel';
import { DanielService } from '../service/daniel.service';

@Component({
  selector: 'my-app',
  providers: [DanielService],
  template: `
    <div *ngIf="daniel">
      <resume-header [daniel]="daniel"></resume-header>

      <div class="panel-body">
          <div class="col-lg-6 greyfont">
            <skills-block [skills]="daniel.skills"></skills-block>
          </div>
          <div class="col-lg-6 greyfont">
            <running-table [races]="daniel.races"></running-table>
          </div>
      </div>
      <div id="pagebreak"></div>
      <about-me [aboutMeParagraphs]="daniel.aboutMeParagraphs"></about-me>
      <span class="hidden-xs">
        <div class="footer">
            <div id="bottomemail" class="text-muted">Email questions or comments to: <a id="email" href="mailto:{{daniel.email}}" target="_top">{{daniel.email}}</a></div>
            <div id="copyright">© {{daniel.currentDate | date:'yyyy'}} {{daniel.name}}. All Rights Reserved.</div>
        </div>
      </span>
    </div>
    `

})

export class AppComponent implements OnInit {
  constructor(private danielService: DanielService) { }
  daniel: Daniel;

  getDaniel(): void {
    this.danielService.getDaniel().then(daniel => this.daniel = daniel);
  }
  ngOnInit(): void {
    this.getDaniel();
  }
}
