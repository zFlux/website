import { Injectable } from '@angular/core';
import { DANIEL } from './static-daniel.service';
import { Daniel } from './daniel.model';

@Injectable({
  providedIn: 'root'
})
export class DanielService {
  getDaniel(): Promise<Daniel> {
    return Promise.resolve(DANIEL);
  }
  constructor() { }
}
