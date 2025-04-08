import { Component, HostListener } from '@angular/core';
import { faUser, faHouse, faTimeline } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  faUser = faUser;
  faHouse = faHouse;
  faTimeline = faTimeline;

  routes = [
    { icon: faHouse, path: '', label: 'Home' },
    { icon: faUser, path: '/profiles', label: 'Profiles' },
    { icon: faTimeline, path: '/timeline', label: 'Timeline' }
  ]

  activeLink = "";
  mobile = false;

  constructor(private responsive: BreakpointObserver){}

  ngOnInit(){
    this.mobile = this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobile = this.responsive.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
  }
}
