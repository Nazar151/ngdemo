import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DeaktivatorService implements CanDeactivate<boolean>{

  constructor() { }
  canDeactivate(): boolean{
    return confirm('leave aut?')
  }
}
