import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { faUser, faHouse, faTimeline } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
  faUser = faUser;
  faHouse = faHouse;
  faTimeline = faTimeline;

  mobile = false;

  constructor(private responsive: BreakpointObserver){}

  ngOnInit(){
    this.mobile = this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
  }

  @HostListener('window:resize')
  onResize() {
    this.mobile = this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
  }
}
