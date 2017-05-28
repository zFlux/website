import { Injectable } from '@angular/core';
import { DANIEL } from './static-daniel';
import { Daniel } from '../model/daniel';

@Injectable()
export class DanielService {
  getDaniel(): Promise<Daniel> {
    return Promise.resolve(DANIEL);
  }
}
