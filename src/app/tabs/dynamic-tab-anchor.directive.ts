import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicTabAnchor]'
})
export class DynamicTabAnchorDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
