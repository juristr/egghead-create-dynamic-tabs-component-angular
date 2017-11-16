import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicTabAnchor]'
})
export class DynamicTabAnchorDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
