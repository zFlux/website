import { Component, Input } from '@angular/core';
import { Race } from '../race.model';

@Component({
  selector: 'app-running-table',
  templateUrl: './running-table.component.html',
  styleUrls: ['./running-table.component.scss']
})
export class RunningTableComponent {
  @Input()
  races!: Race[];
  rows:Race[] = [];

  ngOnInit(): void {
    this.rows = this.races
  }

  columns = [
    { name: 'Date', width: 100 },
    { name: 'Race', width: 200 },
    { name: 'Km', width: 40 },
    { name: 'Time', width: 75}
  ];
}
