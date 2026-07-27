import { Component, HostListener, OnInit, inject } from '@angular/core';
import { faUser, faHouse, faTimeline } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly responsive = inject(BreakpointObserver);

  faUser = faUser;
  faHouse = faHouse;
  faTimeline = faTimeline;

  mobile = false;

  ngOnInit(): void {
    this.mobile = this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.mobile = this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
  }
}
