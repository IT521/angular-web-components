/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'component-library';


export declare interface AwcButton extends Components.AwcButton {}
@ProxyCmp({
  inputs: ['color', 'margin', 'size', 'text']
})
@Component({
  selector: 'awc-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'margin', 'size', 'text']
})
export class AwcButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AwcName extends Components.AwcName {}
@ProxyCmp({
  inputs: ['first', 'greeting', 'hasGreeting', 'hasSizeButton', 'last', 'middle', 'size']
})
@Component({
  selector: 'awc-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'greeting', 'hasGreeting', 'hasSizeButton', 'last', 'middle', 'size']
})
export class AwcName {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
