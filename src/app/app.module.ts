import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable/release/index';
import { AppComponent }  from './component/app.component';
import { ResumeHeaderComponent } from './component/resume-header/resume-header.component';
import { SvgClockComponent } from './component/svg-clock/svg-clock.component';
import { SkillsBlockComponent } from './component/skills-block/skills-block.component';
import { RunningTableComponent } from './component/running-table/running-table.component';
import { AboutMeComponent } from './component/about-me/about-me.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxDatatableModule],
  declarations: [ AppComponent, ResumeHeaderComponent, SvgClockComponent, SkillsBlockComponent, RunningTableComponent, AboutMeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
