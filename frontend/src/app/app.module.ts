import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvinComponent } from './marvin/marvin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilesComponent } from './profiles/profiles.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TimelineComponent } from './timeline/timeline.component';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LayoutModule,
    MatSlideToggleModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
    AppComponent,
    MarvinComponent,
    ProfilesComponent,
    TimelineComponent
  ],
  providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())]
})
export class AppModule { }
