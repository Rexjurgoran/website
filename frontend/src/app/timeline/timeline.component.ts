import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css'],
    standalone: false
})
export class TimelineComponent implements OnInit{

  @HostBinding('style.width')
  public width = '80%';
  
  mobile = false;
  events: Event[] = [];

  constructor(
    private responsive: BreakpointObserver,
    private eventService: EventService) { }

  ngOnInit(): void{
    this.checkMobile();
    this.getEvents();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobile();
  }

  checkMobile(): void{
    if (this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small])) {
      this.mobile = true;
      this.width = '100%';
    }else{
      this.width = '80%';
    };
  }

  getEvents(): void {
    this.eventService.getEvents()
    .subscribe(events => {
      this.events = events.map(this.reworkEvent)
    });
  }

  reworkEvent(event: Event): Event{
    event.date = new Date(event.date);
    return event;
  }

    getIcon(event: Event){
      return event.icon;
    }
}
