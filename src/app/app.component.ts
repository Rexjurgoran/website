import { Component, OnInit } from '@angular/core';
import { faUser, faHouse, faTimeline } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faUser = faUser;
  faHouse = faHouse;
  faTimeline = faTimeline;

  mobile = false;

  constructor(private responsive: BreakpointObserver){}
  ngOnInit(){
    this.responsive.observe(Breakpoints.HandsetLandscape)
      .subscribe(result => {
        if(result.matches){
          this.mobile = true;
        }
      })
  }
}
