import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { PROFILES } from '../mock-profiles';
import { Profile } from '../profile';

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.css'],
    standalone: false
})
export class ProfilesComponent implements OnInit {

  @HostBinding('style.width')
  public width = '80%';

  mobile = false;
  profiles = PROFILES;

  faUser = faUser;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(){
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobile();
  }

  getIcon(profile: Profile){
    return profile.icon;
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
