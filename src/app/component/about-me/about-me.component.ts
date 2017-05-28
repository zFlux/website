import { Component, Input } from '@angular/core';


@Component({
  selector: 'about-me',
  template: `
  <div class="container">
      <div id="aboutme" class="col-lg-12">
        <h2>About me</h2>
  	    <h4 id="aboutmeparts" *ngFor="let paragraph of aboutMeParagraphs">{{paragraph}}</h4>
      </div>
  </div>
  `
})
export class AboutMeComponent {
  @Input() aboutMeParagraphs: string[];

}
