import { Component } from '@angular/core';
import { Daniel } from './daniel.model';
import { DanielService } from './daniel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private danielService: DanielService) { }
  daniel!: Daniel;

  getDaniel(): void {
    this.danielService.getDaniel().then(daniel => this.daniel = daniel);
  }
  ngOnInit(): void {
    this.getDaniel();
  }
}
