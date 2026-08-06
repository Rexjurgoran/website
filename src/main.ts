import { provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    importProvidersFrom(AppRoutingModule)
  ]
}).catch(err => console.error(err));
