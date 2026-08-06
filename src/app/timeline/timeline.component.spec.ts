import { TestBed } from '@angular/core/testing';

import { Event, EventType } from '../event';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimelineComponent]
    });
    component = TestBed.createComponent(TimelineComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter events by selected category', () => {
    const events: Event[] = [
      { title: 'Degree', event: 'Studied', type: EventType.Education, date: new Date('2020-01-01'), icon: null as never },
      { title: 'Role', event: 'Worked', type: EventType.Position, date: new Date('2022-01-01'), icon: null as never }
    ];

    component.events = events;
    component.selectedFilter = EventType.Education;

    const filtered = component.getFilteredEvents();

    expect(filtered).toHaveSize(1);
    expect(filtered[0].type).toBe(EventType.Education);
  });
});
