import { Component, OnInit, HostBinding, HostListener, ChangeDetectionStrategy, inject } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { PROFILES } from '../mock-profiles';
import { Profile } from '../profile';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FontAwesomeModule]
})
export class ProfilesComponent implements OnInit {
  private readonly responsive = inject(BreakpointObserver);


  @HostBinding('style.width')
  public width = '80%';

  mobile = false;
  profiles = PROFILES;

  faUser = faUser;
  
  ngOnInit(){
    this.checkMobile();
  }

  @HostListener('window:resize')
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
