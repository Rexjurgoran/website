import { CommonModule } from '@angular/common';
import { Component, OnInit, HostBinding, HostListener, ChangeDetectionStrategy, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Event, EventType } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatCardModule, MatChipsModule]
})
export class TimelineComponent implements OnInit {
  private readonly responsive = inject(BreakpointObserver);
  private readonly eventService = inject(EventService);

  @HostBinding('style.width')
  public width = '80%';

  mobile = false;
  events: Event[] = [];
  selectedFilter: EventType | 'all' = 'all';
  readonly filters: (EventType | 'all')[] = ['all', EventType.Education, EventType.Skill, EventType.Position, EventType.Project];

  ngOnInit(): void{
    this.checkMobile();
    this.getEvents();
  }

  @HostListener('window:resize')
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

  selectFilter(filter: EventType | 'all'): void {
    this.selectedFilter = filter;
  }

  getFilteredEvents(): Event[] {
    if (this.selectedFilter === 'all') {
      return this.events;
    }

    return this.events.filter(event => event.type === this.selectedFilter);
  }

  getIcon(event: Event){
    return event.icon;
  }
}
