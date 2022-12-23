import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarningHttpRequestsService {

  @Output() warning: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

}
