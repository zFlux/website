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
    { name: 'Date' },
    { name: 'Race' },
    { name: 'Km' },
    { name: 'Time'}
  ];
}
