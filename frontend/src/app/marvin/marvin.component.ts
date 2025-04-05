import { Component, HostListener, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
    selector: 'app-marvin',
    templateUrl: './marvin.component.html',
    styleUrls: ['./marvin.component.css'],
    standalone: false
})
export class MarvinComponent {

  @HostBinding('style.width')
  public width = '80%';

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(){
    if (this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small])) {
      this.width = '100%';
    }else{
      this.width = '80%';
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small])) {
      this.width = '100%';
    }else{
      this.width = '80%';
    };
  }
}
