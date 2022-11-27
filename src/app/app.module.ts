import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { RunningTableComponent } from './running-table/running-table.component';
import { SkillsBlockComponent } from './skills-block/skills-block.component';
import { SvgClockComponent } from './svg-clock/svg-clock.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeHeaderComponent,
    RunningTableComponent,
    SkillsBlockComponent,
    SvgClockComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
