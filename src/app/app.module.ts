import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ComponentLibraryModule } from '@arcgis/map-components-angular';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    ComponentLibraryModule
  ],
  // providers: [
  //   provideClientHydration()
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
