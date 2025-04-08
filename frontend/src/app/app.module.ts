import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvinComponent } from './marvin/marvin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilesComponent } from './profiles/profiles.component';
import {LayoutModule} from '@angular/cdk/layout';
import { TimelineComponent } from './timeline/timeline.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({ declarations: [
        AppComponent,
        MarvinComponent,
        ProfilesComponent,
        TimelineComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        LayoutModule,
        MatSlideToggleModule,
        CommonModule,
        RouterModule,
        MatCardModule,
        MatChipsModule,
        MatStepperModule,
        MatTabsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
