import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { EVENTS } from '../mock-events';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent {

  @HostBinding('style.width')
  public width = '80%';
  
  mobile = false;
  events = EVENTS;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(){
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobile();
  }

  private checkMobile(){
    if (this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small])) {
      this.mobile = true;
      this.width = '100%';
    }else{
      this.width = '80%';
    };
  }
}
