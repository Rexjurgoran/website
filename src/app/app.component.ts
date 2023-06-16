import { Component } from '@angular/core';
import { faUser, faHouse, faTimeline } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public faUser = faUser;
  faHouse = faHouse;
  faTimeline = faTimeline;
}
