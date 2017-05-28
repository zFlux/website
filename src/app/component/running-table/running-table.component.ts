import { Component, Input, OnInit } from '@angular/core';
import { Race } from '../../model/race';

@Component({
  selector: 'running-table',
  template: `
   <div>
      <h2>Runner</h2>
      <ngx-datatable class="material"
        [rows]="rows"
        [columns]="columns"
        [limit]="8"
        [columnMode]="'force'"
        [headerHeight]="30"
        [footerHeight]="30">
      </ngx-datatable>
    </div>
  `
})
export class RunningTableComponent {
  @Input() races: Race[];

rows = [];

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
