import { Directive } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[loggable]'
})
export class LogDirective {
  @Input()
  set logText(value) {
    console.log(value);
  }
}
