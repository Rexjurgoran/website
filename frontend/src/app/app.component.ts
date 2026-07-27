import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { faUser, faHouse, faTimeline } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule]
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
